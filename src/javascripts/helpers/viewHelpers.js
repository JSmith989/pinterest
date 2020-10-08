import boardView from '../components/views/boardView';
import pinsView from '../components/views/pinsView';
import addPinview from '../components/views/addPinView';

const viewHelper = (id) => {
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
    default:
      return console.warn('nothing clicked');
  }
};

const viewListener = (view) => {
  viewHelper(view);

  $('body').on('click', 'li.nav-item', (e) => {
    viewHelper(e.currentTarget.id);
  });
  $('body').on('click', '.card.board .see-pins', (e) => {
    const boardUid = e.currentTarget.id;
    viewHelper('single-farmer', boardUid);
  });
};

export default { viewListener };
