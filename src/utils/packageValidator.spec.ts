import { Item } from '../Item';
import { LineItem } from '../types';
import { validateLine, validators } from './packageValidator';

describe('packageValidator', () => {
  it(`returns false when total number of items is more than the allowed threshold of ${validators.MAX_ITEMS_PICK} `, () => {
    const parsedLineItem: LineItem = {
      maxWeight: 10,
      items: [...Array(validators.MAX_ITEMS_PICK + 1)].map(
        (_, i) => new Item(i + 1, 40.3, 20),
      ),
    };

    expect(validateLine(parsedLineItem)).toBeFalsy();
  });
  it(`returns false when one of the line items value is greater than max value threshold of ${validators.MAX_VALUE_ITEM}`, () => {
    const parsedLineItem: LineItem = {
      maxWeight: 10,
      items: [
        new Item(1, 75, 70),
        new Item(2, 60, validators.MAX_VALUE_ITEM + 3),
        new Item(3, 15, 18),
      ],
    };

    expect(validateLine(parsedLineItem)).toBeFalsy();
  });

  it(`returns false when one of the line items is greater than max weight threshold of ${validators.MAX_WEIGHT_ITEM}`, () => {
    const parsedLineItem: LineItem = {
      maxWeight: 10,
      items: [
        new Item(1, 75, 70),
        new Item(2, validators.MAX_WEIGHT_ITEM + 2, 3),
        new Item(3, 15, 18),
      ],
    };

    expect(validateLine(parsedLineItem)).toBeFalsy();
  });

  it(`returns false when package total weight is greater than the package weight threshold ${validators.MAX_WEIGHT_PACKAGE}`, () => {
    const parsedLineItem: LineItem = {
      maxWeight: validators.MAX_WEIGHT_PACKAGE + 12.3,
      items: [new Item(1, 75, 70), new Item(2, 60, 3), new Item(3, 15, 18)],
    };

    expect(validateLine(parsedLineItem)).toBeFalsy();
  });
});
