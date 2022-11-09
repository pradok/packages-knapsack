import fs from 'fs-extra';
import { Parser } from './interfaces';
import { Item } from './Item';
import { LineItem } from './types';
// TODO Validations for each line
export class PackageParser implements Parser {
  public async parse(fileName: string): Promise<LineItem[]> {
    try {
      const parsed = await fs.readFile(`./files/${fileName}`, {
        encoding: 'utf-8',
      });
      const lines = parsed.replace(/\r/g, '').split('\n');
      return this.parseLines(lines);
    } catch (error) {
      throw new Error('Unable to parse');
    }
  }

  private parseLines(lines: string[]) {
    try {
      const items = lines.map((line) => this.parseLine(line));
      return items;
    } catch (err) {
      return [];
    }
  }

  private parseLine(line: string) {
    const [packageWeight, items] = line.split(' : ');
    return {
      maxWeight: Number(packageWeight),
      items: this.getItems(items),
    };
  }

  getItems(items: string): Item[] {
    return items.split(' ').map((item) => {
      const [index, weight, cost] = this.replaceCurrencySymbol(item).split(',');
      return new Item(Number(index), Number(weight), Number(cost));
    });
  }

  replaceCurrencySymbol(rawItem: string) {
    return rawItem.replace(/[()€]/g, '');
  }
}
