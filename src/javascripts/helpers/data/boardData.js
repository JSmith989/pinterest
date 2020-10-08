import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getBoards = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/boards.json`).then((response) => {
    const theBoards = response.data;
    const boards = [];
    if (theBoards) {
      Object.keys(theBoards).forEach((boardId) => {
        boards.push(theBoards[boardId]);
      });
    }
    resolve(boards);
  }).catch((error) => reject(error));
});

const deleteBoard = (firebaseKey) => axios.delete(`${baseUrl}/boards/${firebaseKey}.json`);

export default { getBoards, deleteBoard };
