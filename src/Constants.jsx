const DEADLINE_RED = '#eb1c23';
const LIFELINE_BLU = '#4aa1cc';

const DEADLINE = 'deadline';
const LIFELINE = 'lifeline';

const TYPE_COLORS = { deadline: DEADLINE_RED, lifeline: LIFELINE_BLU };

const DATA_TYPES = {
    time: 'time',
    monetary: 'monetary',
    percentage: 'percentage',
    other: 'other',
};

const TIMES = { year: 31536000, day: 86400, hour: 3600, minute: 60 };

const API_LINK = 'https://bnidevs.github.io/test/cc/clock.json';
//const API_LINK = 'https://api.climateclock.world/v2/clock.json';

const FONTS = {
    BOLD: 'katwijk_monoblack',
    REG: 'katwijk_monolight',
};

export { DEADLINE, LIFELINE, TYPE_COLORS, API_LINK, DATA_TYPES, TIMES, FONTS };
