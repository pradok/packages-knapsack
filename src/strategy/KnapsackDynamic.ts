import { Item } from '../Item';
import { Element, Matrix } from '../types';

export class KnapsackDynamic {
  private matrix: Matrix = [];
  private items: Item[] = [];

  getItems(items: Item[], capacity: number): Item[] {
    this.items = items;
    for (let itemRow = 0; itemRow < items.length; itemRow++) {
      const row = [];
      for (
        let capacityColumn = 1;
        capacityColumn <= capacity;
        capacityColumn++
      ) {
        const solution = this.getValuedItems(itemRow, capacityColumn);
        row.push(solution);
      }
      this.matrix.push(row);
    }

    const lastRow = this.matrix[this.matrix.length - 1];
    const mostValued = lastRow[lastRow.length - 1];

    return mostValued.itemsCombo;
  }

  private getValuedItems(itemRow: number, weightColumn: number) {
    const col = weightColumn - 1;
    const row = itemRow - 1;
    const item = this.items[itemRow];
    const NoValuedItems = { maxValue: 0, itemsCombo: [] };
    const remainderWeight = weightColumn - item.weight;

    let itemsPreviousRowColumn: Element;

    if (itemRow > 0 && this.matrix[row][col]) {
      itemsPreviousRowColumn = this.matrix[row][col];
    } else {
      itemsPreviousRowColumn = NoValuedItems;
    }

    let itemsPreviousRowRemainder: Element;

    if (itemRow > 0 && this.matrix[row][remainderWeight - 1]) {
      itemsPreviousRowRemainder = this.matrix[row][remainderWeight - 1];
    } else {
      itemsPreviousRowRemainder = NoValuedItems;
    }

    if (remainderWeight < 0) {
      return itemsPreviousRowColumn;
    }

    const previousRowItemsValue = itemsPreviousRowColumn.maxValue;
    const prevRowItemsRemainderValue = itemsPreviousRowRemainder.maxValue;

    const newValue = prevRowItemsRemainderValue + item.value;
    if (newValue > previousRowItemsValue) {
      const itemsCombo = itemsPreviousRowRemainder.itemsCombo.slice();
      itemsCombo.push(item);
      return { maxValue: newValue, itemsCombo };
    } else {
      return itemsPreviousRowColumn;
    }
  }
}
