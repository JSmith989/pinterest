import boardData from './boardData';
import pinData from './pinData';

const getDataForPinsView = () => new Promise((resolve, reject) => {
  pinData.getPins().then((pinResponse) => {
    boardData.getBoards().then((boardResponse) => {
      const pinstuff = [];
      pinResponse.forEach((pin) => {
        const boardObject = boardResponse.find((board) => board.boardUid === pin.boardUid);

        const boardUse = {
          boardName: boardObject.name,
        };

        pinstuff.push({ ...pin, ...boardUse });
        resolve(pinstuff);
      });
    });
  }).catch((error) => reject(error));
});

const getSingleBoardView = (boardUid) => new Promise((resolve, reject) => {
  boardData.getSingleBoard(boardUid)
    .then((boardResponse) => {
      pinData.getBoardsPins(boardResponse.boardUid)
        .then((pinResponse) => {
          const finalObject = { board: boardResponse, pins: pinResponse };
          resolve(finalObject);
        });
    }).catch((error) => reject(error));
});

export default { getDataForPinsView, getSingleBoardView };
