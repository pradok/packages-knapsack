import { Parser, Strategy } from './interfaces';
import { LineItem } from './types';
import { validateLine } from './utils/packageValidator';
export class Packer {
  constructor(
    private _parser: Parser,
    private _strategy: Strategy,
    private _utils: { validateLine: typeof validateLine },
  ) {}

  public async pack(fileName: string) {
    try {
      const lineItems = await this._parser.parse(fileName);
      const mostValuedPackagedItems = lineItems.map(
        ({ items, maxWeight }: LineItem) => {
          const packagedItems = this._utils.validateLine({ items, maxWeight })
            ? this._strategy.execute(items, maxWeight)
            : [];
          return packagedItems.map((item) => item.index);
        },
      );
      const indexes = mostValuedPackagedItems.map((itemIndexes) => {
        return itemIndexes.join(',') || '-';
      });

      let itemIndexesString = '';
      indexes.map((index) => (itemIndexesString += `${index}\n`));

      return itemIndexesString;
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : 'Packer Error');
    }
  }
}
