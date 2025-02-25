import type { RandomTable } from "./types";

export const emptyTable: RandomTable = {
  name: '',
  description: '',
  diceFormula: '',
  table: [
    { min: 0, max: 0, description: '' },
  ],
}

export const dcTable: RandomTable = {
  name: 'DC Table',
  description: 'Skill/Task checks',
  diceFormula: '1d20',
table: [
  { min: 1, max: 1, description: 'Fail, and' },
  { min: 2, max: '-6', description: 'Fail, but' },
  { min: '-5', max: '-1', description: 'Success, but' },
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

export const creatureTypes: RandomTable = {
  name: 'Creature Types',
  description: 'Random supernatural creature types for a horror or urban fantasy setting',
  diceFormula: '1d20',
  table: [
    { min: 1, max: 1, description: 'Vampire' },
    { min: 2, max: 2, description: 'Werewolf' },
    { min: 3, max: 3, description: 'Ghost/Spirit' },
    { min: 4, max: 4, description: 'Demon' },
    { min: 5, max: 5, description: 'Kitsune' },
    { min: 6, max: 6, description: 'Witch/Warlock' },
    { min: 7, max: 7, description: 'Zombie' },
    { min: 8, max: 8, description: 'Ghoul' },
    { min: 9, max: 9, description: 'Skinwalker' },
    { min: 10, max: 10, description: 'Faerie/Fey' },
    { min: 11, max: 11, description: 'Shapeshifter' },
    { min: 12, max: 12, description: 'Djinn' },
    { min: 13, max: 13, description: 'Revenant' },
    { min: 14, max: 14, description: 'Nightmare' },
    { min: 15, max: 15, description: 'Lich' },
    { min: 16, max: 16, description: 'Chimera' },
    { min: 17, max: 17, description: 'Shadow' },
    { min: 18, max: 18, description: 'Wendigo' },
    { min: 19, max: 19, description: 'Banshee' },
    { min: 20, max: 20, description: 'Chupacabra' }
  ]
};

export const creatureMotivations: RandomTable = {
  name: 'Creature Motivations',
  description: 'Random motivations for supernatural creatures',
  diceFormula: '1d10',
  table: [
    { min: 1, max: 1, description: 'Hunger' },
    { min: 2, max: 2, description: 'Vengeance' },
    { min: 3, max: 3, description: 'Survival' },
    { min: 4, max: 4, description: 'Territorial' },
    { min: 5, max: 5, description: 'Curiosity' },
    { min: 6, max: 6, description: 'Obsession' },
    { min: 7, max: 7, description: 'Power' },
    { min: 8, max: 8, description: 'Revenge' },
    { min: 9, max: 9, description: 'Torment' },
    { min: 10, max: 10, description: 'Love' },
  ]
};

export const urbanLocations: RandomTable = {
  name: 'Urban Locations',
  description: 'Different districts and areas within a city',
  diceFormula: '1d100',
  table: [
    { min: 1, max: 1, description: 'Government District' },
    { min: 2, max: 2, description: 'University' },
    { min: 3, max: 3, description: 'Subways System' },
    { min: 4, max: 4, description: 'Park District' },
    { min: 5, max: 5, description: 'Downtown' },
    { min: 6, max: 19, description: 'High Class Residential' },
    { min: 20, max: 32, description: 'Middle Class Residential' },
    { min: 33, max: 46, description: 'Slums' },
    { min: 47, max: 59, description: 'Commercial District' },
    { min: 60, max: 72, description: 'Warehouse District' },
    { min: 73, max: 84, description: 'Industrial District' },
    { min: 85, max: 91, description: 'Entertainment District' },
    { min: 92, max: 94, description: 'Financial District' },
    { min: 95, max: 97, description: 'Technology District' },
    { min: 98, max: 100, description: 'Medical Park' }
  ]
};

export const caseSources: RandomTable = {
  name: 'Case Sources',
  description: 'How investigators learn about supernatural cases',
  diceFormula: '1d12',
  table: [
    { min: 1, max: 1, description: 'News Article/Report' },
    { min: 2, max: 2, description: 'An old contact' },
    { min: 3, max: 3, description: 'An ally asks for help' },
    { min: 4, max: 4, description: 'Police report or scanner chatter' },
    { min: 5, max: 5, description: 'A distressed witness' },
    { min: 6, max: 6, description: 'Online forum or conspiracy site' },
    { min: 7, max: 7, description: "A survivor's testimony" },
    { min: 8, max: 8, description: 'A family member of the victim' },
    { min: 9, max: 9, description: "A missing person's report" },
    { min: 10, max: 10, description: 'An overheard conversation' },
    { min: 11, max: 11, description: 'A diary or journal entry' },
    { min: 12, max: 12, description: 'A local legend or urban myth resurfacing' }
  ]
};

export const creaturesByMotive: { [key: string]: RandomTable } = {
  hunger: {
    name: 'Hunger-Driven Creatures',
    description: 'Creatures motivated by hunger',
    diceFormula: '1d6',
    table: [
      { min: 1, max: 1, description: 'Vampire' },
      { min: 2, max: 2, description: 'Werewolf' },
      { min: 3, max: 3, description: 'Zombie' },
      { min: 4, max: 4, description: 'Ghoul' },
      { min: 5, max: 5, description: 'Wendigo' },
      { min: 6, max: 6, description: 'Chupacabra' }
    ]
  },
  vengeance: {
    name: 'Vengeance-Driven Creatures',
    description: 'Creatures motivated by vengeance',
    diceFormula: '1d6',
    table: [
      { min: 1, max: 1, description: 'Revenant' },
      { min: 2, max: 2, description: 'Ghost/Spirit' },
      { min: 3, max: 3, description: 'Demon' },
      { min: 4, max: 4, description: 'Banshee' },
      { min: 5, max: 5, description: 'Witch/Warlock' },
      { min: 6, max: 6, description: 'Human' }
    ]
  },
  survival: {
    name: 'Survival-Driven Creatures',
    description: 'Creatures motivated by survival',
    diceFormula: '1d6',
    table: [
      { min: 1, max: 1, description: 'Skinwalker' },
      { min: 2, max: 2, description: 'Shapeshifter' },
      { min: 3, max: 3, description: 'Chimera' },
      { min: 4, max: 4, description: 'Djinn' },
      { min: 5, max: 5, description: 'Faerie/Fey' },
      { min: 6, max: 6, description: 'Human' }
    ]
  },
  territorial: {
    name: 'Territorial Creatures',
    description: 'Creatures motivated by territorial instincts',
    diceFormula: '1d6',
    table: [
      { min: 1, max: 1, description: 'Werewolf' },
      { min: 2, max: 2, description: 'Wendigo' },
      { min: 3, max: 3, description: 'Faerie/Fey' },
      { min: 4, max: 4, description: 'Skinwalker' },
      { min: 5, max: 5, description: 'Nightmare' },
      { min: 6, max: 6, description: 'Human' }
    ]
  },
  curiosity: {
    name: 'Curiosity-Driven Creatures',
    description: 'Creatures motivated by curiosity',
    diceFormula: '1d6',
    table: [
      { min: 1, max: 1, description: 'Kitsune' },
      { min: 2, max: 2, description: 'Faerie/Fey' },
      { min: 3, max: 3, description: 'Shapeshifter' },
      { min: 4, max: 4, description: 'Djinn' },
      { min: 5, max: 5, description: 'Ghost/Spirit' },
      { min: 6, max: 6, description: 'Human' }
    ]
  },
  obsession: {
    name: 'Obsession-Driven Creatures',
    description: 'Creatures motivated by obsession',
    diceFormula: '1d6',
    table: [
      { min: 1, max: 1, description: 'Ghost/Spirit' },
      { min: 2, max: 2, description: 'Vampire' },
      { min: 3, max: 3, description: 'Revenant' },
      { min: 4, max: 4, description: 'Nightmare' },
      { min: 5, max: 5, description: 'Demon' },
      { min: 6, max: 6, description: 'Human' }
    ]
  },
  power: {
    name: 'Power-Driven Creatures',
    description: 'Creatures motivated by power',
    diceFormula: '1d6',
    table: [
      { min: 1, max: 1, description: 'Vampire' },
      { min: 2, max: 2, description: 'Lich' },
      { min: 3, max: 3, description: 'Demon' },
      { min: 4, max: 4, description: 'Witch/Warlock' },
      { min: 5, max: 5, description: 'Djinn' },
      { min: 6, max: 6, description: 'Human' }
    ]
  },
  revenge: {
    name: 'Revenge-Driven Creatures',
    description: 'Creatures motivated by revenge',
    diceFormula: '1d6',
    table: [
      { min: 1, max: 1, description: 'Ghost/Spirit' },
      { min: 2, max: 2, description: 'Revenant' },
      { min: 3, max: 3, description: 'Banshee' },
      { min: 4, max: 4, description: 'Lich' },
      { min: 5, max: 5, description: 'Demon' },
      { min: 6, max: 6, description: 'Human' }
    ]
  },
  torment: {
    name: 'Torment-Driven Creatures',
    description: 'Creatures motivated by causing torment',
    diceFormula: '1d6',
    table: [
      { min: 1, max: 1, description: 'Demon' },
      { min: 2, max: 2, description: 'Nightmare' },
      { min: 3, max: 3, description: 'Shadow' },
      { min: 4, max: 4, description: 'Ghost/Spirit' },
      { min: 5, max: 5, description: 'Wendigo' },
      { min: 6, max: 6, description: 'Human' }
    ]
  },
  love: {
    name: 'Love-Driven Creatures',
    description: 'Creatures motivated by love',
    diceFormula: '1d6',
    table: [
      { min: 1, max: 1, description: 'Ghost/Spirit' },
      { min: 2, max: 2, description: 'Vampire' },
      { min: 3, max: 3, description: 'Revenant' },
      { min: 4, max: 4, description: 'Kitsune' },
      { min: 5, max: 5, description: 'Banshee' },
      { min: 6, max: 6, description: 'Human' }
    ]
  }
};

export const locationContents: RandomTable = {
  name: "Location Contents",
  description: "What investigators find when searching a location",
  diceFormula: "1d100",
  table: [
    { min: 1, max: 32, description: "Clue" },
    { min: 33, max: 64, description: "Setback" }, 
    { min: 65, max: 100, description: "Empty" }
  ]
};

export const clueTypes: RandomTable = {
  name: "Clue Types",
  description: "Different types of clues investigators might discover",
  diceFormula: "1d10",
  table: [
    { min: 1, max: 1, description: "Physical Evidence" },
    { min: 2, max: 2, description: "Eyewitness Accounts" },
    { min: 3, max: 3, description: "Strange Sounds" },
    { min: 4, max: 4, description: "Track/Footprints" },
    { min: 5, max: 5, description: "Disturbed Environment" },
    { min: 6, max: 6, description: "Local legends" },
    { min: 7, max: 7, description: "Victim/Survivor" },
    { min: 8, max: 8, description: "Ambush/Sighting" },
    { min: 9, max: 9, description: "Behavioral Oddities" },
    { min: 10, max: 10, description: "Supernatural Evidence" }
  ]
};

export const setbackTypes: RandomTable = {
  name: "Setback Types",
  description: "Different types of setbacks investigators might encounter",
  diceFormula: "1d10",
  table: [
    { min: 1, max: 1, description: "Uncooperative Survivor" },
    { min: 2, max: 2, description: "Tampered Scene" },
    { min: 3, max: 3, description: "Erased Tracks" },
    { min: 4, max: 4, description: "Misleading Sounds" },
    { min: 5, max: 5, description: "Unreliable Witness" },
    { min: 6, max: 6, description: "Contradictory Lore" },
    { min: 7, max: 7, description: "Misleading Evidence" },
    { min: 8, max: 8, description: "Ambush" },
    { min: 9, max: 9, description: "Unexpected Behavior" },
    { min: 10, max: 10, description: "Staged Crime Scene" }
  ]
};

export const creaturesByLocation: {[key: string]: RandomTable} = {
  vampire: {
    name: "Vampire Locations",
    description: "Common locations for vampire activity",
    diceFormula: "1d6",
    table: [
      { min: 1, max: 1, description: "High Class Residential" },
      { min: 2, max: 2, description: "Entertainment District" },
      { min: 3, max: 3, description: "Downtown" },
      { min: 4, max: 4, description: "Slums" },
      { min: 5, max: 5, description: "Commercial District" },
      { min: 6, max: 6, description: "Park District" }
    ]
  },
  werewolf: {
    name: "Werewolf Locations",
    description: "Common locations for werewolf activity", 
    diceFormula: "1d6",
    table: [
      { min: 1, max: 1, description: "Slums" },
      { min: 2, max: 2, description: "Warehouse District" },
      { min: 3, max: 3, description: "Industrial District" },
      { min: 4, max: 4, description: "Park District" },
      { min: 5, max: 5, description: "Subways System" },
      { min: 6, max: 6, description: "Middle Class Residential" }
    ]
  },
  "ghost/spirit": {
    name: "Ghost/Spirit Locations",
    description: "Common locations for ghost/spirit activity",
    diceFormula: "1d6",
    table: [
      { min: 1, max: 1, description: "High Class Residential" },
      { min: 2, max: 2, description: "University" },
      { min: 3, max: 3, description: "Government District" },
      { min: 4, max: 4, description: "Medical Park" },
      { min: 5, max: 5, description: "Old Theaters" },
      { min: 6, max: 6, description: "Downtown" }
    ]
  },
  demon: {
    name: "Demon Locations",
    description: "Common locations for demon activity",
    diceFormula: "1d6",
    table: [
      { min: 1, max: 1, description: "Slums" },
      { min: 2, max: 2, description: "Commercial District" },
      { min: 3, max: 3, description: "Entertainment District" },
      { min: 4, max: 4, description: "University" },
      { min: 5, max: 5, description: "Subways System" },
      { min: 6, max: 6, description: "Financial District" }
    ]
  },
  kitsune: {
    name: "Kitsune Locations",
    description: "Common locations for kitsune activity",
    diceFormula: "1d6",
    table: [
      { min: 1, max: 1, description: "High Class Residential" },
      { min: 2, max: 2, description: "University" },
      { min: 3, max: 3, description: "Park District" },
      { min: 4, max: 4, description: "Downtown" },
      { min: 5, max: 5, description: "Entertainment District" },
      { min: 6, max: 6, description: "Middle Class Residential" }
    ]
  },
  "witch/warlock": {
    name: "Witch/Warlock Locations",
    description: "Common locations for witch/warlock activity",
    diceFormula: "1d6",
    table: [
      { min: 1, max: 1, description: "Slums" },
      { min: 2, max: 2, description: "Warehouse District" },
      { min: 3, max: 3, description: "University" },
      { min: 4, max: 4, description: "Government District" },
      { min: 5, max: 5, description: "Park District" },
      { min: 6, max: 6, description: "Medical Park" }
    ]
  },
  zombie: {
    name: "Zombie Locations",
    description: "Common locations for zombie activity",
    diceFormula: "1d6",
    table: [
      { min: 1, max: 1, description: "Slums" },
      { min: 2, max: 2, description: "Warehouse District" },
      { min: 3, max: 3, description: "Industrial District" },
      { min: 4, max: 4, description: "Subways System" },
      { min: 5, max: 5, description: "Commercial District" },
      { min: 6, max: 6, description: "Medical Park" }
    ]
  },
  ghoul: {
    name: "Ghoul Locations",
    description: "Common locations for ghoul activity",
    diceFormula: "1d6",
    table: [
      { min: 1, max: 1, description: "Slums" },
      { min: 2, max: 2, description: "Subways System" },
      { min: 3, max: 3, description: "Warehouse District" },
      { min: 4, max: 4, description: "Industrial District" },
      { min: 5, max: 5, description: "Park District" },
      { min: 6, max: 6, description: "Medical Park" }
    ]
  },
  skinwalker: {
    name: "Skinwalker Locations",
    description: "Common locations for skinwalker activity",
    diceFormula: "1d6",
    table: [
      { min: 1, max: 1, description: "Slums" },
      { min: 2, max: 2, description: "Warehouse District" },
      { min: 3, max: 3, description: "Industrial District" },
      { min: 4, max: 4, description: "Park District" },
      { min: 5, max: 5, description: "Downtown" },
      { min: 6, max: 6, description: "Middle Class Residential" }
    ]
  },
  "faerie/fey": {
    name: "Faerie/Fey Locations",
    description: "Common locations for faerie/fey activity",
    diceFormula: "1d6",
    table: [
      { min: 1, max: 1, description: "High Class Residential" },
      { min: 2, max: 2, description: "Park District" },
      { min: 3, max: 3, description: "University" },
      { min: 4, max: 4, description: "Entertainment District" },
      { min: 5, max: 5, description: "Commercial District" },
      { min: 6, max: 6, description: "Downtown" }
    ]
  },
  shapeshifter: {
    name: "Shapeshifter Locations",
    description: "Common locations for shapeshifter activity",
    diceFormula: "1d6",
    table: [
      { min: 1, max: 1, description: "High Class Residential" },
      { min: 2, max: 2, description: "Middle Class Residential" },
      { min: 3, max: 3, description: "Entertainment District" },
      { min: 4, max: 4, description: "Commercial District" },
      { min: 5, max: 5, description: "University" },
      { min: 6, max: 6, description: "Downtown" }
    ]
  },
  djinn: {
    name: "Djinn Locations",
    description: "Common locations for djinn activity",
    diceFormula: "1d6",
    table: [
      { min: 1, max: 1, description: "High Class Residential" },
      { min: 2, max: 2, description: "University" },
      { min: 3, max: 3, description: "Financial District" },
      { min: 4, max: 4, description: "Commercial District" },
      { min: 5, max: 5, description: "Entertainment District" },
      { min: 6, max: 6, description: "Government District" }
    ]
  },
  revenant: {
    name: "Revenant Locations",
    description: "Common locations for revenant activity",
    diceFormula: "1d6",
    table: [
      { min: 1, max: 1, description: "Slums" },
      { min: 2, max: 2, description: "Warehouse District" },
      { min: 3, max: 3, description: "Subways System" },
      { min: 4, max: 4, description: "Industrial District" },
      { min: 5, max: 5, description: "Commercial District" },
      { min: 6, max: 6, description: "Medical Park" }
    ]
  },
  nightmare: {
    name: "Nightmare Locations",
    description: "Common locations for nightmare activity",
    diceFormula: "1d6",
    table: [
      { min: 1, max: 1, description: "High Class Residential" },
      { min: 2, max: 2, description: "Middle Class Residential" },
      { min: 3, max: 3, description: "University" },
      { min: 4, max: 4, description: "Medical Park" },
      { min: 5, max: 5, description: "Entertainment District" },
      { min: 6, max: 6, description: "Downtown" }
    ]
  },
  lich: {
    name: "Lich Locations",
    description: "Common locations for lich activity",
    diceFormula: "1d6",
    table: [
      { min: 1, max: 1, description: "University" },
      { min: 2, max: 2, description: "Government District" },
      { min: 3, max: 3, description: "High Class Residential" },
      { min: 4, max: 4, description: "Warehouse District" },
      { min: 5, max: 5, description: "Park District" },
      { min: 6, max: 6, description: "Medical Park" }
    ]
  },
  chimera: {
    name: "Chimera Locations",
    description: "Common locations for chimera activity",
    diceFormula: "1d6",
    table: [
      { min: 1, max: 1, description: "Slums" },
      { min: 2, max: 2, description: "Industrial District" },
      { min: 3, max: 3, description: "Warehouse District" },
      { min: 4, max: 4, description: "Park District" },
      { min: 5, max: 5, description: "Subways System" },
      { min: 6, max: 6, description: "Commercial District" }
    ]
  },
  shadow: {
    name: "Shadow Locations",
    description: "Common locations for shadow activity",
    diceFormula: "1d6",
    table: [
      { min: 1, max: 1, description: "Subways System" },
      { min: 2, max: 2, description: "Warehouse District" },
      { min: 3, max: 3, description: "Industrial District" },
      { min: 4, max: 4, description: "Slums" },
      { min: 5, max: 5, description: "Financial District" },
      { min: 6, max: 6, description: "Downtown" }
    ]
  },
  wendigo: {
    name: "Wendigo Locations",
    description: "Common locations for wendigo activity",
    diceFormula: "1d6",
    table: [
      { min: 1, max: 1, description: "Slums" },
      { min: 2, max: 2, description: "Warehouse District" },
      { min: 3, max: 3, description: "Industrial District" },
      { min: 4, max: 4, description: "Park District" },
      { min: 5, max: 5, description: "Downtown" },
      { min: 6, max: 6, description: "Medical Park" }
    ]
  },
  banshee: {
    name: "Banshee Locations",
    description: "Common locations for banshee activity",
    diceFormula: "1d6",
    table: [
      { min: 1, max: 1, description: "High Class Residential" },
      { min: 2, max: 2, description: "Middle Class Residential" },
      { min: 3, max: 3, description: "Government District" },
      { min: 4, max: 4, description: "University" },
      { min: 5, max: 5, description: "Entertainment District" },
      { min: 6, max: 6, description: "Park District" }
    ]
  },
  chupacabra: {
    name: "Chupacabra Locations",
    description: "Common locations for chupacabra activity",
    diceFormula: "1d6",
    table: [
      { min: 1, max: 1, description: "Slums" },
      { min: 2, max: 2, description: "Industrial District" },
      { min: 3, max: 3, description: "Warehouse District" },
      { min: 4, max: 4, description: "Park District" },
      { min: 5, max: 5, description: "Subways System" },
      { min: 6, max: 6, description: "Medical Park" }
    ]
  }
};

