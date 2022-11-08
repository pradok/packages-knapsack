import { KnapsackDynamic } from '../KnapsackDynamic';
import { lineItems1 } from '../mocks';
describe('KnapsackDynamic', () => {
  it('packaged valued items for maximum weight of 6', () => {
    const { items, maxWeight } = lineItems1();
    const knapsack = new KnapsackDynamic();
    const itemsPacked = knapsack.getItems(items, maxWeight);
    expect(itemsPacked.map((item) => item.index)).toEqual([1, 3, 5]);
  });
});
