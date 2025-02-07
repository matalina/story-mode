import { keywords } from "../data/keywords";
import { getRandomItem, getRandomItems } from "./random";

export function getRandomKeywords(number = 3) {
  return getRandomItems(keywords, number);
}

function getRandomWord() {
  return getRandomItem(keywords);
}