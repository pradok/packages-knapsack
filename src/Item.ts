export class Item {
  constructor(
    private _index: number,
    private _weight: number,
    private _value: number,
  ) {}

  public get value() {
    return this._value;
  }

  public get weight() {
    return this._weight;
  }

  public get index() {
    return this._index;
  }
}
