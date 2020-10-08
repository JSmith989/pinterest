import boardData from '../../helpers/data/boardData';

const boardMaker = (boardObject) => {
  const domString = `<div class="card board" style="width: 22rem;" id=${boardObject.bId}>
                      <img class="card-img-top" src="${boardObject.image}" alt="Card image cap">
                      <div class="card-body">
                        <h5 class="card-title">${boardObject.name}</h5>
                        <a href="#" class="btn btn-primary see-pins" id=${boardObject.bId}>View Pins</a>
                        <a href="#" id="${boardObject.bId}" class="btn btn-danger delete-board">Delete Board</a>
                      </div>
                    </div>`;

  $('body').on('click', '.delete-board', (e) => {
    e.stopImmediatePropagation();
    $(`.card#${e.currentTarget.id}`).remove();
    boardData.deleteBoard(e.currentTarget.id);
  });
  return domString;
};

export default { boardMaker };
