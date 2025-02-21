import { DiceRoll } from "@dice-roller/rpg-dice-roller";
import { status } from "../../components/story-mode/NewSceneButton.svelte";
import { rollOnTable } from "../../lib/tables";
import { creatureMotivations, creatureTypes } from "../tables";
import type { Creature, GameConfig, MapData, MapItem, Objective } from "../types";

export function createMap() {
  let value: MapData = $state(JSON.parse(localStorage.getItem('map') || '{}'));

  function getKey(item: MapItem) {
    return `${item.location.row}.${item.location.col}`;
  }

  function generateMap() {
    value.map = {};
    // generate quest 
    const quest: Objective = generateQuest();
    // generate start location
    // generate objective(s)
    // generate boons
    // generate setbacks
    // generate remaining blank tiles
    // randomize map
    // make start location visible
  }

  function move(key: string) {
    if (canMoveTo(value.current, key)) {
      value.current = key;
    } else {
      return false;
    }
  }
  return {
    get value() {
      return value;
    },
    getKey,
    generateMap,
    move,
  }
};

function canMoveTo(from: string, to: string) {
  const fromParts = from.split('.');
  const fromRow = parseInt(fromParts[0]);
  const fromCol = parseInt(fromParts[1]);
  const toParts = to.split('.');
  const toRow = parseInt(toParts[0]);
  const toCol = parseInt(toParts[1]);

  // Can't move to the same location
  if (fromRow === toRow && fromCol === toCol) {
    return false;
  }

  // Cant move diagonally
  if (Math.abs(fromRow - toRow) === 1 && Math.abs(fromCol - toCol) === 1) {
    return false;
  }

  // Can't move more than one space
  if (Math.abs(fromRow - toRow) > 1 || Math.abs(fromCol - toCol) > 1) {
    return false;
  }

  // Cant move out of bounds
  if (toRow < 1 || toRow > 5 || toCol < 1 || toCol > 5) {
    return false;
  }

  return true;
}

function generateQuest(): Objective {
  // Starting with a Monster Hunt
  const creature = generateCreature();

  return {
    type: 'hunt',
    name: `Hunt the ${creature.type}`,
    creature: creature,
    source: rollOnTable(sources).description
  }
}

function generateCreature(): Creature {
  const type = rollOnTable(creatureTypes);
  return {
    type: type.description,
    level: new DiceRoll('1d6').total,
    motivation: rollOnTable(creatureMotivations).description,
  }
}