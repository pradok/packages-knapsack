import { Item } from '../Item';

export const lineItems1 = () => {
  const items = [
    { index: 1, weight: 3, cost: 12 },
    { index: 2, weight: 1, cost: 3 },
    { index: 3, weight: 2, cost: 8 },
    { index: 4, weight: 2, cost: 5 },
    { index: 5, weight: 1, cost: 6 },
  ];
  const maxWeight = 6;
  return {
    maxWeight,
    items: items.map(
      ({ index, weight, cost }) => new Item(index, weight, cost),
    ),
  };
};

export const lineItems2 = () => {
  const items = [
    { index: 1, weight: 53.38, cost: 45 },
    { index: 2, weight: 88.62, cost: 98 },
    { index: 3, weight: 78.48, cost: 3 },
    { index: 4, weight: 72.3, cost: 76 },
    { index: 5, weight: 9.18, cost: 9 },
    { index: 6, weight: 46.34, cost: 48 },
  ];
  const maxWeight = 81;
  return {
    maxWeight,
    items: items.map(
      ({ index, weight, cost }) => new Item(index, weight, cost),
    ),
  };
};

export const lineItems3 = () => {
  const items = [{ index: 1, weight: 15.3, cost: 34 }];
  const maxWeight = 8;
  return {
    maxWeight,
    items: items.map(
      ({ index, weight, cost }) => new Item(index, weight, cost),
    ),
  };
};
