import type { SvelteComponent } from "svelte";
import type { LogLevel } from "vite";

export interface RandomTable {
  name: string;
  description: string;
  diceFormula: string;
  table: MinMaxRow[];
}

export interface CustomTableList{
  [key: string]: RandomTable;
}

export interface MinMaxRow {
  min: number | string | null;
  max: number | string | null;
  description: string | Function;
}

export interface Content {
  [timestamp: number]: ContentData;
};

export interface ContentData {
  output: string;
  type: ContentType;
  input?: string;
};

export type ContentType = 'start' | 'task' | 'oracle' | 'keyword' | 'input'| 'roll' | 'table';

export interface SettingPage {
  name: string;
  component: SvelteComponent;
};

export type CustomTableViews = 'create' | 'import'| 'view' | ''

export interface MapData {
  start: string;
  current: string;
  objective: Objective;
  map: { [key: string]: MapItem };
  
}

export interface Objective {
  type: QuestType;
  name: string;
  creature?: Creature;
  source?: string;
}

export const questTypes = ['find', 'deliver', 'defeat', 'collect', 'investigate', 'hunt', 'explore'] as const
export type QuestType = typeof questTypes[number]

export interface MapItem {
  name: string;
  location: MapLocation;
  icon: string;
  visible: boolean;
}

export interface MapLocation {
  row: number;
  col: number;
}

export type Level = 'high' | 'low' | 'no';

const settingTypes = [ 'wilderness', 'urban', 'underground', 'space', 'dungeon', 'sea' ] as const;
type SettingTypes = typeof settingTypes[number];

export interface GameConfig {
  size: number; // default 5
  magic: Level;
  tech: Level;
  setting: SettingTypes;
}

export interface Creature {
  name?: string;
  level: number;
  type: string;
  motivation: string;
}

