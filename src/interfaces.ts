import { Item } from './Item';
import { LineItem } from './types';

export interface Strategy {
  execute(items: Item[], capacity: number): Item[];
}

export interface Parser {
  parse(fileName: string): Promise<LineItem[]>;
}
