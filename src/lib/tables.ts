import { DiceRoll } from '@dice-roller/rpg-dice-roller';

export function rollOnTable(table: RandomTable) {
  const roll = new DiceRoll(table.diceFormula);
  const total = roll.total;
  let description = '';

  for (let i in table.table) {
    const row = table.table[i];
    const desc =
      typeof row.description === 'string'
        ? row.description.toString()
        : row.description().toString();
    if (row.min === null && total <= row.max) description = desc;
    else if (row.max === null && total >= row.min) description = desc;
    else if (total >= row.min && total <= row.max) description = desc;
  }
  return { description, roll };
}

export interface RandomTable {
  name: string;
  description: string;
  diceFormula: string;
  table: MinMaxRow[];
}

export interface MinMaxRow {
  min: number | null;
  max: number | null;
  description: string | Function;
}

export const weather: RandomTable = {
  name: 'Weather',
  description: 'Random weather',
  diceFormula: '1d20',
  table: [
    { min: 1, max: 1, description: 'Unseasonably Cold' },
    { min: 2, max: 3, description: 'Chilly' },
    { min: 4, max: 7, description: 'Precipitation' },
    { min: 8, max: 13, description: 'Clear' },
    { min: 14, max: 17, description: 'Overcast' },
    { min: 18, max: 19, description: 'Warm' },
    { min: 20, max: 20, description: 'Unseasonably Hot' },
  ],
};

export const timeDay: RandomTable = {
  name: 'Time of Day',
  description: 'Random time of day',
  diceFormula: '1d4',
  table: [
    { min: 1, max: 1, description: 'Morning' },
    { min: 2, max: 2, description: 'Afternoon' },
    { min: 3, max: 3, description: 'Evening' },
    { min: 4, max: 4, description: 'Night/Late' },
  ],
};

export const season: RandomTable = {
  name: 'Seasons',
  description: 'Random season',
  diceFormula: '1d4',
  table: [
    { min: 1, max: 1, description: 'Winter' },
    { min: 2, max: 2, description: 'Spring' },
    { min: 3, max: 3, description: 'Summer' },
    { min: 4, max: 4, description: 'Fall/Autumn' },
  ],
};

export const moonPhases: RandomTable = {
  name: 'Moon Phases',
  description: 'Random moon phases',
  diceFormula: '1d8',
  table: [
    { min: 1, max: 1, description: 'New Moon' },
    { min: 2, max: 2, description: 'Waning Crescent' },
    { min: 3, max: 3, description: 'Third Quarter' },
    { min: 4, max: 4, description: 'Waning Gibbous' },
    { min: 5, max: 5, description: 'Full Moon' },
    { min: 6, max: 6, description: 'Waxing Gibbous' },
    { min: 7, max: 7, description: 'First Quarter' },
    { min: 8, max: 8, description: 'Waxing Cresent' },
  ],
};

export const daysWeek: RandomTable = {
  name: 'Days of the Week',
  description: 'Random days of the week',
  diceFormula: '1d8',
  table: [
    { min: 1, max: 1, description: 'Monday' },
    { min: 2, max: 2, description: 'Tuesday' },
    { min: 3, max: 3, description: 'Wednesday' },
    { min: 4, max: 4, description: 'Thursday' },
    { min: 5, max: 5, description: 'Friday' },
    { min: 6, max: 6, description: 'Saturday' },
    { min: 7, max: 7, description: 'Sunday' },
    { min: 8, max: 8, description: 'Roll again' },
  ],
};
