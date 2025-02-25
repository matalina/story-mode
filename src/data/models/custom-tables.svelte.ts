import type { CustomTableList, RandomTable } from "../types";

export function createCustomTables() {
  let value: CustomTableList = $state(JSON.parse(localStorage.getItem('tables') || '{}'));

  function reset() {
    value = {};
    localStorage.setItem('tables', JSON.stringify(value));

  }

  function add(data: RandomTable | RandomTable[]) {
    if (!Array.isArray(data)) {
      data = [data];
    }
    for (const item of data) {
        value[item.name] = item;
        localStorage.setItem('tables', JSON.stringify(value));
    }
  }

  function remove(key: string) {
    delete value[key];
    localStorage.setItem('tables', JSON.stringify(value));
  }

  return {
    get value() {
      return value;
    },
    reset,
    add,
    remove,
  }
};