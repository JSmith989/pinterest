import boardView from '../components/views/boardView';
import pinsView from '../components/views/pinsView';
import addPinview from '../components/views/addPinView';
import addBoardView from '../components/views/addBoardView';
import singleBoardView from '../components/views/singleBoardView';
import updatePinView from '../components/views/updatePinView';

const viewHelper = (id, arg) => {
  $('#app').html('');

  switch (id) {
    case 'board-link':
      return boardView.boardView();
    case 'board-return':
      return boardView.boardView();
    case 'pin-return':
      return pinsView.pinsView();
    case 'add-pin-link':
      return addPinview.addPinView();
    case 'add-board-link':
      return addBoardView.addBoardView();
    case 'single-board':
      return singleBoardView.singleBoardView(arg);
    case 'update-pin-link':
      return updatePinView.updatePinView(arg);
    default:
      return console.warn('nothing clicked');
  }
};

const viewListener = (view) => {
  viewHelper(view);

  $('body').on('click', 'li.nav-item', (e) => {
    viewHelper(e.currentTarget.id);
  });

  $('body').on('click', '.update-pin', (e) => {
    const pinFirebaseKey = e.currentTarget.id;
    viewHelper('update-pin-link', pinFirebaseKey);
  });

  $('body').on('click', '.card.board .see-pins', (e) => {
    const boardUid = e.currentTarget.id;
    viewHelper('single-board', boardUid);
  });
};

export default { viewListener };
