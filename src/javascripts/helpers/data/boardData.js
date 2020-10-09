import axios from 'axios';
import apiKeys from '../apiKeys.json';
import pinData from './pinData';

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

const deleteBoard = (boardUid) => {
  pinData.getBoardsPins(boardUid)
    .then((response) => {
      response.forEach((item) => {
        pinData.deletePin(item.firebaseKey);
      });
    })
    .then(() => {
      pinData.getSingleBoard(boardUid)
        .then((response) => {
          axios.delete(`${baseUrl}/boards/${response.firebaseKey}.json`);
        });
    });
};

export default { getBoards, deleteBoard };
