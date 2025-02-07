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
        if (row.min === null && (row.max && total <= (row.max as number))) description = desc;
        else if (row.max === null && (row.min && total >= (row.min as number))) description = desc;
        else if ((row.min && total >= (row.min as number)) && (row.max && total <= (row.max as number))) description = desc;
  }
  return { description, roll };
}

export function rollOnDCTable(dc: number) {
  const table = dcTable;
  const roll = new DiceRoll(table.diceFormula);
  const total = roll.total;
  let description = '';

  for (let i in table.table) {
    const row = table.table[i];
    const min = typeof row.min === 'string' ? dc + parseInt(row.min as string) : row.min;
    const max = typeof row.max === 'string' ? dc + parseInt(row.max as string) : row.max;

    const desc =
      typeof row.description === 'string'
        ? row.description.toString()
        : row.description().toString();
    if (min === null && (max && total <= (max as number))) description = desc;
    else if (max === null && (min && total >= (min as number))) description = desc;
    else if ((min && total >= (min as number)) && (max && total <= (max as number))) description = desc;
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
  min: number | string | null;
  max: number | string | null;
  description: string | Function;
}

  export const dcTable: RandomTable = {
    name: 'DC Table',
    description: 'Skill/Task checks',
    diceFormula: '1d20',
  table: [
    { min: 1, max: 1, description: 'Fail, and' },
    { min: 2, max: '-6', description: 'Fail, but' },
    { min: '+5', max: '-1', description: 'Success, but' },
    { min: '+0', max: '+4', description: 'Success' },
    { min: '+5', max: 20, description: 'Success, and' },
  ],
}

export const oracle: RandomTable = {
  name: 'Oracle',
  description: 'Answer to Yes/No questions',
  diceFormula: '1d20',
  table: [
    { min: 1, max: 1, description: 'No, and' },
    { min: 2, max: 9, description: 'No, but' },
    { min: 10, max: 14, description: 'Yes, but' },
    { min: 15, max: 19, description: 'Yes' },
    { min: 20, max: null, description: 'Yes, and' },
  ],
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
    { min: 8, max: 8, description: 'Waxing Crescent' },
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

export const genre: RandomTable = {
  name: 'Genre',
  description: 'Random genre',
  diceFormula: '1d27',
  table: [
    { min: 1, max: 1, description: 'High Fantasy' },
    { min: 2, max: 2, description: 'Low Fantasy' },
    { min: 3, max: 3, description: 'Dark Fantasy' },
    { min: 4, max: 4, description: 'Urban Fantasy' },
    { min: 5, max: 5, description: 'Cyberpunk' },
    { min: 6, max: 6, description: 'Post-Apocalyptic' },
    { min: 7, max: 7, description: 'Space Opera' },
    { min: 8, max: 8, description: 'Hard Sci-fi' },
    { min: 9, max: 9, description: 'Mecha' },
    { min: 10, max: 10, description: 'Gothic Horror' },
    { min: 11, max: 11, description: 'Cosmic Horror' },
    { min: 12, max: 12, description: 'Psychological Horror' },
    { min: 13, max: 13, description: 'Supernatural Horror' },
    { min: 14, max: 14, description: 'Zombie Apocalypse' },
    { min: 15, max: 15, description: 'Medieval Grit' },
    { min: 16, max: 16, description: 'Ancient Worlds' },
    { min: 17, max: 17, description: 'Steam Punk' },
    { min: 18, max: 18, description: 'Weird West' },
    { min: 19, max: 19, description: 'Alternate History' },
    { min: 20, max: 20, description: 'Heist & Crime' },
    { min: 21, max: 21, description: 'Noir & Detective' },
    { min: 22, max: 22, description: 'Superhero' },
    { min: 23, max: 23, description: 'Action Thriller' },
    { min: 24, max: 24, description: 'Absurdist Comedy' },
    { min: 25, max: 25, description: 'Time Travel' },
    { min: 26, max: 26, description: 'Multiverse' },
    { min: 27, max: 27, description: 'Romance' },
  ],
};
