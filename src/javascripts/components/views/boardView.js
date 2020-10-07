import boardData from '../../helpers/data/boardData';
import cards from '../cards/boardCards';

const boardView = () => {
  $('#app').append('<h1>BOARDS</h1>');
  boardData.getBoards().then((response) => {
    response.forEach((item) => {
      $('#app').append(cards.boardMaker(item));
    });
  });
};

export default { boardView };
