import { KnapsackDynamic } from '../KnapsackDynamic';
import { lineItems1, lineItems2, lineItems3, lineItems4 } from '../mocks';
describe('KnapsackDynamic', () => {
  let knapsack: KnapsackDynamic;
  beforeEach(() => {
    knapsack = new KnapsackDynamic();
  });
  test.each([
    { items: lineItems1(), maxWeight: 6, expected: [1, 3, 5] },
    { items: lineItems2(), maxWeight: 81, expected: [4] },
    { items: lineItems3(), maxWeight: 8, expected: [] },
    { items: lineItems4(), maxWeight: 75, expected: [2] },
    // { items: lineItems5(), maxWeight: 56, expected: [8, 9] },
  ])(
    'knapsack.getItems returns valued packaged items index of $expected with maximum weight of $maxWeight',
    ({ items, maxWeight, expected }) => {
      const itemsPacked = knapsack.execute(items, maxWeight);
      expect(itemsPacked.map((item) => item.index)).toEqual(expected);
    },
  );
});
