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

// const deleteBoard = (boardId) => {
// //   console.warn(boardId);
// };

export default { getBoards };
