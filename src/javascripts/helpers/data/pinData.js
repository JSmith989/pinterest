import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getPins = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/pins.json`).then((response) => {
    const thePins = response.data;
    const pins = [];
    if (thePins) {
      Object.keys(thePins).forEach((pinId) => {
        pins.push(thePins[pinId]);
      });
    }
    resolve(pins);
  }).catch((error) => reject(error));
});

export default { getPins };
