import { Item } from '../Item';
import { PackageParser } from '../PackageParser';
describe('PackageParser', () => {
  it('parses string of items with their weight limits', async () => {
    const packageParser = new PackageParser();
    const items = await packageParser.parse('input1.txt');
    const expected = [
      { weight: 81, itemsTotal: 6 },
      { weight: 8, itemsTotal: 1 },
      { weight: 75, itemsTotal: 9 },
      { weight: 56, itemsTotal: 9 },
    ];
    items.map((item, i) => {
      expect(item.maxWeight).toEqual(expected[i].weight);
      expect(item.items.length).toEqual(expected[i].itemsTotal);
      expect(item.items[0]).toBeInstanceOf(Item);
    });
  });
});
