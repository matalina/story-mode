export interface RandomTable {
  name: string;
  description: string;
  diceFormula: string;
  table: MinMaxRow[];
}

export interface MinMaxRow {
  min: number | string | null;
  max: number | string | null;
  description: string | Function;
}

export const statuses = [
  {
    status: 'Solid',
    target: 3,
    guidance: 'Scene situation is dull, nothing interesting is happening',
  },
  {
    status: 'Stable',
    target: 6,
    guidance: 'Events are underway and are proceeding as expected',
  },
  {
    status: 'Average',
    target: 9,
    guidance: 'Situation has the potential for the unexpected',
  },
  {
    status: 'Unstable',
    target: 12,
    guidance: 'Events require players to be on high alert',
  },
  {
    status: 'Insane',
    target: 15,
    guidance: 'Players in constant danger, anything could happen',
  },
  {
    status: 'Chaos',
    target: 18,
    guidance: 'Situation is beyond all control',
  },
];