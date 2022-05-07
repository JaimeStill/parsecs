export class StoreManager<T> {
  readonly prefix: string;
  constructor(
    prefix: string
  ) {
    this.prefix = prefix;
  }

  private urlEncode = (value: string): string => {
    const regex = /[^a-zA-Z0-9-.]/gi;
    let newValue = value.replace(/\s/g, '-').toLowerCase();
    newValue = newValue.replace(regex, '');
    return newValue;
  }

  private processKey = (value: string): string =>
    value = value.startsWith(this.prefix)
      ? this.urlEncode(value)
      : this.urlEncode(`${this.prefix}-${value}`);

  exists = (key: string): boolean =>
    Object.keys(localStorage)
      .some(x => x === this.processKey(key));

  getAll = (): T[] =>
    Object.entries(localStorage)
      .filter(([key, value]) => key.startsWith(this.prefix))
      .map(([key, value]) => JSON.parse(value) as T);

  get = (key: string): T | null => {
    const item = localStorage.getItem(
      this.processKey(key)
    );

    return item
      ? JSON.parse(item) as T
      : null
  }

  save = (key: string, data: T) =>
    localStorage.setItem(
      this.processKey(key),
      JSON.stringify(data)
    );

  delete = (key: string) =>
    localStorage.removeItem(
      this.processKey(key)
    );
}
