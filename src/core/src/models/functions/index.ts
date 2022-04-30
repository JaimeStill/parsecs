export const Clone = <T>(data: T, args: Partial<T> = {}) =>
  Object.assign({} as T, data, args, { id: Symbol() });
