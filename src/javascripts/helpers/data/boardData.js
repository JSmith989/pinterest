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

const getSingleBoard = (boardUid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/boards.json?orderBy="boardUid"&equalTo="${boardUid}"`)
    .then((response) => {
      const board = Object.values(response.data);
      const thisBoard = board[0];
      resolve(thisBoard);
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
      getSingleBoard(boardUid)
        .then((response) => {
          axios.delete(`${baseUrl}/boards/${response.firebaseKey}.json`);
        });
    });
};

const addBoard = (data) => axios.post(`${baseUrl}/boards.json`, data).then((response) => {
  const update = { firebaseKey: response.data.name };
  axios
    .patch(`${baseUrl}/boards/${response.data.name}.json`, update)
    .catch((error) => console.warn(error));
});

export default { getBoards, deleteBoard, addBoard };
