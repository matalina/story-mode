import { DiceRoll } from '@dice-roller/rpg-dice-roller';
import type { RandomTable } from '../data/types';
import { dcTable } from '../data/tables';

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
