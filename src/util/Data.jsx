import { API_LINK, DATA_TYPES, TIMES } from '../Constants';

const Call = async () => {
    return fetch(API_LINK)
        .then((response) => response.json())
        .then((data) => data.data.modules);
};

const Wres = (res) => {
    return Math.round(-1 * (Math.log(res) / Math.log(10)));
};

const Wranglers = {
    [DATA_TYPES.monetary]: (val, res) => {
        val = val.toFixed(Wres(res));
        return '$' + val.toString();
    },
    [DATA_TYPES.percentage]: (val, res) => {
        val = val.toFixed(Wres(res));
        return val.toString() + '%';
    },
    [DATA_TYPES.time]: (val, res) => {
        const divisors = [TIMES.year, TIMES.day, TIMES.hour, TIMES.minute];
        const wholes = divisors.map((e) => {
            const whole = Math.floor(val / e);
            val -= whole * e;
            return whole;
        });
        const delins = ['yrs', 'days', ':', ':'];
        let rtrn = delins.map((e, i) => `${wholes[i]}${e}`);
        return rtrn.join('') + val.toString();
    },
    [DATA_TYPES.other]: (val, res) => {
        val = val.toFixed(Wres(res));
        return val.toString();
    },
};

export { Call, Wranglers, Wres };
