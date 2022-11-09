import { Item } from './Item';
export interface Element {
  itemsCombo: Item[];
  maxValue: number;
}
export interface LineItem {
  maxWeight: number;
  items: Item[];
}

export type Matrix = Array<Array<Element>>;
