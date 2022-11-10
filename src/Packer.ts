import { Parser, Strategy } from './interfaces';
import { LineItem } from './types';

export class Packer {
  constructor(private _parser: Parser, private _strategy: Strategy) {}

  public async pack(fileName: string) {
    const lineItems = await this._parser.parse(fileName);
    const mostValuedPackagedItems = lineItems.map(
      ({ items, maxWeight }: LineItem) => {
        const packagedItems = this._strategy.execute(items, maxWeight);
        return packagedItems.map((item) => item.index);
      },
    );
    const indexes = mostValuedPackagedItems.map((itemIndexes) => {
      return itemIndexes.join(',') || '-';
    });

    let itemIndexesString = '';
    indexes.map((index) => (itemIndexesString += `${index}\n`));

    return itemIndexesString;
  }
}
