import boardData from '../../helpers/data/boardData';
import cards from '../cards/boardCards';

const boardView = () => {
  boardData.getBoards().then((response) => {
    response.forEach((item) => {
      $('#app').append(cards.boardMaker(item));
    });
  });
};

export default { boardView };
