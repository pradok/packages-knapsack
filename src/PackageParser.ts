import fs from 'fs-extra';
import { Parser } from './interfaces';
import { Item } from './Item';
import { LineItem } from './types';

export class PackageParser implements Parser {
  public async parse(fileName: string): Promise<LineItem[]> {
    try {
      const parsed = await fs.readFile(`./files/${fileName}`, {
        encoding: 'utf-8',
      });
      const lines = parsed.replace(/\r/g, '').split('\n');
      return this._parseLines(lines);
    } catch (error) {
      throw new Error(
        error instanceof Error ? error.message : 'PackageParser Error',
      );
    }
  }

  private _parseLines(lines: string[]) {
    try {
      const items = lines.map((line) => this._parseLine(line));
      return items;
    } catch (err) {
      return [];
    }
  }

  private _parseLine(line: string) {
    const [packageWeight, items] = line.split(' : ');
    return {
      maxWeight: Number(packageWeight),
      items: this._getItems(items),
    };
  }

  _getItems(items: string): Item[] {
    return items.split(' ').map((item) => {
      const [index, weight, cost] = this._removeCurrencySymbol(item).split(',');
      return new Item(Number(index), Number(weight), Number(cost));
    });
  }

  _removeCurrencySymbol(rawItem: string) {
    return rawItem.replace(/[()€]/g, '');
  }
}
