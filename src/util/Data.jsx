import { API_LINK } from '../Constants';

const Call = async () => {
    return fetch(API_LINK)
        .then((response) => response.json())
        .then((data) => data.data.modules);
};

export { Call };
