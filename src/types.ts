import { Item } from './Item';
export interface Element {
  itemsCombo: Item[];
  maxValue: number;
}

export type Matrix = Array<Array<Element>>;
