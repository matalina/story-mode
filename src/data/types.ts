import type { SvelteComponent } from "svelte";

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