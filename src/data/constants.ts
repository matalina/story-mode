import type { MapItem, MapLocation, RandomTable } from './types';
import { caseSources, clueTypes, creatureMotivations, creatureTypes, daysWeek, genre, moonPhases, season, setbackTypes, timeDay, urbanLocations, weather } from './tables';

/* Table Options */

export const moreTables: {[key: string]: RandomTable} = {
  [genre.name]: genre,
  [weather.name]: weather,
  [season.name]: season,
  [timeDay.name]: timeDay,
  [moonPhases.name]: moonPhases,
  [daysWeek.name]: daysWeek,
  [creatureTypes.name]: creatureTypes,
  [creatureMotivations.name]: creatureMotivations,
  [urbanLocations.name]: urbanLocations,
  [caseSources.name]: caseSources,
  [clueTypes.name]: clueTypes,
  [setbackTypes.name]: setbackTypes,
};


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

export const emptyTile: MapItem = {
  name: '',
  location: {
    row: 0,
    col: 0,
  } as MapLocation,
  icon: '',
  visible: false,
};