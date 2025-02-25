import { DiceRoll } from "@dice-roller/rpg-dice-roller";
import { status } from "../../components/story-mode/NewSceneButton.svelte";
import { rollOnTable } from "../../lib/tables";
import { caseSources, creatureMotivations, creaturesByLocation, creaturesByMotive, creatureTypes, urbanLocations } from "../tables";
import type { Creature, GameConfig, MapData, MapItem, Objective } from "../types";
import { emptyTile } from "../constants";
import { map } from "../../components/carta-map/CartaMap.svelte";

export function createMap() {
  let value: MapData = $state(JSON.parse(localStorage.getItem('map') || '{}'));

  function getKey(item: MapItem) {
    return `${item.location.row}.${item.location.col}`;
  }

  function generateMap(onTheFly: boolean = true) {
    value.map = {};
    const mapItems: MapItem[] = [];
    // generate quest 
    const quest: Objective = generateQuest();
    map.value.objective = quest;
    const questEnd: MapItem = {
      name: quest.creature?.location as string,
      location: {
        row: 0,
        col: 0,
      },
      icon: 'finish',
      visible: false,
    };
    mapItems.push(questEnd);
    // generate start location
    const startLocation = rollOnTable(urbanLocations);
    const startItem: MapItem = {
      name: startLocation.description,
      location: {
        row: 0,
        col: 0,
      },
      icon: 'start',
      visible: true,
    };
    mapItems.push(startItem);
    // generate remaining blank tiles
    for (let i = 0; i < 24; i++) {
      mapItems.push(emptyTile);
    }
    // randomize map
    mapItems.sort(() => Math.random() - 0.5);
    // assign map items to map
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        mapItems[i * 5 + j].location = {
          row: i,
          col: j,
        };
        if(mapItems[i * 5 + j].icon === 'start') {
          value.start = `${i}.${j}`;
          value.current = `${i}.${j}`;
        }
        if(mapItems[i * 5 + j].icon === 'finish') {
          value.objective.location = `${i}.${j}`;
        }
        value.map[`${i}.${j}`] = mapItems[i * 5 + j];
      }
    }
  }

  function move(key: string) {
    if (canMoveTo(value.current, key)) {
      value.current = key;
    } else {
      return false;
    }
    value.map[key].visible = true;
  }
  return {
    get value() {
      return value;
    },
    getKey,
    generateMap,
    move,
    canMoveTo,
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

  // Can't move more than one space
  if (Math.abs(fromRow - toRow) > 1 || Math.abs(fromCol - toCol) > 1) {
    return false;
  }

  // Cant move out of bounds
  if (toRow < 0 || toRow > 5 || toCol < 0 || toCol > 5) {
    return false;
  }

  return true;
}

function generateQuest(): Objective {
  // Starting with a Monster Hunt
  const source = rollOnTable(caseSources);
  const motivation = rollOnTable(creatureMotivations);
  const creatureType = rollOnTable(creaturesByMotive[motivation.description.toLowerCase()]);
  let creatureLocation;
  if(creatureType.description === 'Human') {
    creatureLocation = rollOnTable(urbanLocations);
  } else {
    creatureLocation = rollOnTable(creaturesByLocation[creatureType.description.toLowerCase()]);
  }
  const creature = {
    type: creatureType.description,
    level: new DiceRoll('1d6').total,
    motivation: motivation.description,
    location: creatureLocation.description,
  };
  
  return {
    type: 'hunt',
    name: `Hunt the ${creatureType.description}`,
    creature,
    source: source.description,
    location: '',
  }
}