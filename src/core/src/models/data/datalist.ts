import { titlecase } from '../utils';

export const Datalist = <T>(data: T) =>
  Object.entries(data)
    .map(([key, value]) => {
      return {
        id: Symbol(key),
        label: titlecase(key),
        value: value
      }
    });
