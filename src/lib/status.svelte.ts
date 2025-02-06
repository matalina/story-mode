export function createStatus() {
  let value: number = $state(2);

  function reset() {
    value = 2;
  }

  function update(data: number) {
    value = data;
  }

  return {
    get value() {
      return value;
    },
    reset,
    update,
  }
};