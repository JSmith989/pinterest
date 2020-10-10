import mergedData from '../../helpers/data/mergedData';

const singleBoardView = (boardUid) => {
  mergedData.getSingleBoardView(boardUid).then((response) => {
    const { board, pins } = response;

    $('#app').append(`<div id="single-view">
                            <h1 style="color:white;">${board.name} Pins</h1>
                          </div>`);
    if (pins.length) {
      pins.forEach((pin) => {
        $('#single-view').append(`
        <div class="card pin" style="width: 30rem;" 
  id=${pin.firebaseKey}>
                        <img class="card-img-top" src="${pin.image}" alt="Card image cap">
                        <div class="card-body">
                        <h5 class="card-title">${pin.name}</h5>
                          <a href="#" id="${pin.firebaseKey}" class="btn btn-danger delete-pin">Delete Pin</a>
                        </div>
                      </div>
        `);
      });
    } else {
      $('#single-view').append('<h3>no pins</h3>');
    }
  });
};

export default { singleBoardView };
