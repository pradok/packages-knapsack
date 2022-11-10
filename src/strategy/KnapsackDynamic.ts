import { Strategy } from '../interfaces';
import { Item } from '../Item';
import { Element, Matrix } from '../types';

export class KnapsackDynamic implements Strategy {
  private matrix: Matrix = [];
  private items: Item[] = [];

  public execute(items: Item[], weightLimit: number): Item[] {
    const weightLimitInGrams = this._convertToGrams(weightLimit);
    this.items = items;
    for (let itemRow = 0; itemRow < items.length; itemRow++) {
      const row = [];
      for (
        let weightColumn = 1;
        weightColumn <= weightLimitInGrams;
        weightColumn++
      ) {
        const solution = this.getValuedItems(itemRow, weightColumn);
        row.push(solution);
      }
      this.matrix.push(row);
    }

    const lastRow = this.matrix[this.matrix.length - 1];
    const mostValued = lastRow[lastRow.length - 1];

    this.items = [];
    this.matrix = [];
    return mostValued.itemsCombo;
  }

  private getValuedItems(itemRow: number, weightColumn: number) {
    const col = weightColumn - 1;
    const row = itemRow - 1;
    const item = this.items[itemRow];
    const weightInGrams = this._convertToGrams(item.weight);
    const NoValuedItems = { maxValue: 0, itemsCombo: [] };
    const remainderWeight = weightColumn - weightInGrams;

    let itemsPreviousRowRemainder: Element;

    if (itemRow > 0 && this.matrix[row][remainderWeight - 1]) {
      itemsPreviousRowRemainder = this.matrix[row][remainderWeight - 1];
    } else {
      itemsPreviousRowRemainder = NoValuedItems;
    }

    let itemsPreviousRowColumn: Element;

    if (itemRow > 0 && this.matrix[row][col]) {
      itemsPreviousRowColumn = this.matrix[row][col];
    } else {
      itemsPreviousRowColumn = NoValuedItems;
    }

    if (remainderWeight < 0) {
      return itemsPreviousRowColumn;
    }

    const previousRowItemsValue = itemsPreviousRowColumn.maxValue;
    const prevRowItemsRemainderValue = itemsPreviousRowRemainder.maxValue;

    const maxValue = prevRowItemsRemainderValue + item.value;
    if (maxValue >= previousRowItemsValue) {
      const itemsCombo = itemsPreviousRowRemainder.itemsCombo.slice();
      itemsCombo.push(item);
      return { maxValue, itemsCombo };
    } else {
      return itemsPreviousRowColumn;
    }
  }

  private _convertToGrams(weight: number): number {
    return Math.trunc(weight * 1000);
  }
}
