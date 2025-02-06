export interface Content {
  [timestamp: number]: ContentData;
};

export interface ContentData {
  output: string;
  type: ContentType;
};


export type ContentType = 'start' | 'task' | 'oracle' | 'keyword' | 'input'| 'roll';

export function createContent() {
  let value = $state(JSON.parse(localStorage.getItem('content') || '{}'));

  function reset() {
    value = {};
    localStorage.setItem('content', JSON.stringify(value));
  }

  function add(data: ContentData) {
    const timestamp = Date.now();
    value[timestamp] = data;
    localStorage.setItem('content', JSON.stringify(value));
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