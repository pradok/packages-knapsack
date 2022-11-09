import { Item } from '../Item';

const buildItems = (items: { index: number; weight: number; cost: number }[]) =>
  items.map(({ index, weight, cost }) => new Item(index, weight, cost));

export const lineItems1 = () => {
  const items = [
    { index: 1, weight: 3, cost: 12 },
    { index: 2, weight: 1, cost: 3 },
    { index: 3, weight: 2, cost: 8 },
    { index: 4, weight: 2, cost: 5 },
    { index: 5, weight: 1, cost: 6 },
  ];
  return buildItems(items);
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
  return buildItems(items);
};

export const lineItems3 = () => {
  const items = [{ index: 1, weight: 15.3, cost: 34 }];
  return buildItems(items);
};

export const lineItems4 = () => {
  const items = [
    { index: 1, weight: 85.31, cost: 29 },
    { index: 2, weight: 14.55, cost: 74 },
    { index: 3, weight: 3.98, cost: 16 },
    { index: 4, weight: 26.24, cost: 55 },
    { index: 5, weight: 63.69, cost: 52 },
    { index: 6, weight: 76.25, cost: 75 },
    { index: 7, weight: 60.02, cost: 74 },
    { index: 8, weight: 93.18, cost: 35 },
    { index: 9, weight: 89.95, cost: 78 },
  ];
  return buildItems(items);
};

export const lineItems5 = () => {
  const items = [
    { index: 1, weight: 90.72, cost: 13 },
    { index: 2, weight: 33.8, cost: 40 },
    { index: 3, weight: 43.15, cost: 10 },
    { index: 4, weight: 37.97, cost: 16 },
    { index: 5, weight: 46.81, cost: 36 },
    { index: 6, weight: 48.77, cost: 79 },
    { index: 7, weight: 81.8, cost: 45 },
    { index: 8, weight: 19.36, cost: 79 },
    { index: 9, weight: 6.76, cost: 64 },
  ];
  return buildItems(items);
};
