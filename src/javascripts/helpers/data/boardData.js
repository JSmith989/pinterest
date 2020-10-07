import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getBoards = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/boards.json`).then((response) => {
    const demFarmers = response.data;
    const farmers = [];
    if (demFarmers) {
      Object.keys(demFarmers).forEach((farmerId) => {
        farmers.push(demFarmers[farmerId]);
      });
    }
    resolve(farmers);
  }).catch((error) => reject(error));
});

export default { getBoards };
