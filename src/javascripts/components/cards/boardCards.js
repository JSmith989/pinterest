import boardData from '../../helpers/data/boardData';
// import pinData from '../../helpers/data/pinData';

// const allDaPins = () => {
//   $('body').on('click', '.see-pins', (e) => {
//     e.stopImmediatePropagation();

//   });
// };

const boardMaker = (boardObject) => {
  const domString = `<div class="card board" style="width: 22rem;" id=${boardObject.boardUid}>
                      <img class="card-img-top" src="${boardObject.image}" alt="Card image cap">
                      <div class="card-body">
                        <h5 class="card-title">${boardObject.name}</h5>
                        <a href="#" class="btn btn-primary see-pins" id=${boardObject.boardUid}>View Pins</a>
                        <a href="#" id="${boardObject.boardUid}" class="btn btn-danger delete-board">Delete Board</a>
                      </div>
                    </div>`;

  $('body').on('click', '.card.board .btn.delete-board', (e) => {
    e.stopImmediatePropagation();
    $(`.card#${e.currentTarget.id}`).remove();
    boardData.deleteBoard(e.currentTarget.id);
  });
  return domString;
};

export default { boardMaker };
