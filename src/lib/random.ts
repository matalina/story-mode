export function getRandomItems(items: Array<any>, count: number) {
  const words = [];
  for (let i = 0; i < count; i++) {
    let word = getRandomItem(items);
    while (words.includes(word)) {
      word = getRandomItem(items);
    }
    words.push(word)
  }
  return words;
}

export function getRandomItem(items: Array<any>) {
  const index = (Math.floor(Math.random() * items.length) % items.length);
  return items[index];
}