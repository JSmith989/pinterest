import boardData from '../../helpers/data/boardData';

const boardMaker = (boardObject) => {
  const domString = `<div class="card board" style="width: 18rem;" id=${boardObject.uid}>
                      <img class="card-img-top" src="${boardObject.image}" alt="Card image cap">
                      <div class="card-body">
                        <h5 class="card-title">${boardObject.name}</h5>
                        <a href="#" class="btn btn-primary" id=${boardObject.uid}>View Pins</a>
                        <a href="#" id="${boardObject.uid}" class="btn btn-danger delete-farmer">Delete Board</a>
                      </div>
                    </div>`;

  $('body').on('click', '.card.farmer .btn.delete-farmer', (e) => {
    e.stopImmediatePropagation();
    $(`.card#${e.currentTarget.id}`).remove();
    boardData.deleteFarmer(e.currentTarget.id);
  });
  return domString;
};

export default { boardMaker };
