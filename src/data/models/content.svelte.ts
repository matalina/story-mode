import type { ContentData } from "./types";

export function createContent() {
  let value = $state(JSON.parse(localStorage.getItem('content') || '{}'));

  function reset() {
    value = {};
    localStorage.setItem('content', JSON.stringify(value));

  }

  function add(data: ContentData | ContentData[]) {
    if (!Array.isArray(data)) {
      data = [data];
    }
    for (const item of data) {
      // wait 1 ms before writing to insure timestamp is different
      setTimeout(() => {
        const timestamp = Date.now();
        value[timestamp] = item;
        localStorage.setItem('content', JSON.stringify(value));
      }, 1);
    }
  }

  function remove(timestamp: number) {
    delete value[timestamp];
    localStorage.setItem('content', JSON.stringify(value));
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