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

const deletePin = (firebaseKey) => axios.delete(`${baseUrl}/pins/${firebaseKey}.json`);

const addPin = (data) => axios.post(`${baseUrl}/pins.json`, data)
  .then((response) => {
    const update = { firebaseKey: response.data.name };
    axios.patch(`${baseUrl}/pins/${response.data.name}.json`, update);
  }).catch((error) => console.warn(error));

const getBoardsPins = (boardUid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/pins.json?orderBy="boardUid"&equalTo="${boardUid}"`)
    .then((response) => {
      const boardsPins = response.data;
      const pins = [];
      if (boardsPins) {
        Object.keys(boardsPins).forEach((pinId) => {
          pins.push(boardsPins[pinId]);
        });
      }
      resolve(pins);
    }).catch((error) => reject(error));
});

const getSingleBoard = (pinFirebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/pins/${pinFirebaseKey}.json`).then((response) => {
    const thisPin = response.data;
    resolve(thisPin);
  }).catch((error) => reject(error));
});

export default {
  getPins,
  deletePin,
  addPin,
  getBoardsPins,
  getSingleBoard
};
