import boardData from '../../helpers/data/boardData';
import pinData from '../../helpers/data/pinData';

const updatePinForm = (pinObject) => {
  $('#update-pin-form').html(`
      <h2>Add A Horsey pin to Your Pasture</h2>
      <div id="success-message"></div>
      <form>
        <div id="error-message"></div>
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" class="form-control" id="name" value="${pinObject.name}" placeholder="Example: Betsy">
        </div>
        <div class="form-group">
          <label for="image">image</label>
          <input type="text" class="form-control" value="${pinObject.image}" id="image" placeholder="Example: Angus">
        </div>
        <div class="form-group">
          <label for="board">board</label>
            <select class="form-control" id="board">
              <option value="">Select a board</option>
            </select>
        </div>
        <button id="update-pin-btn" type="submit" class="btn btn-info"><i class="fas fa-plus-circle"></i> Update pin</button>
      </form>
  `);

  boardData.getBoards().then((response) => {
    response.forEach((item) => {
      $('select').append(`<option value="${item.boardUid}" ${pinObject.boardUid === item.boardUid ? "selected='selected'" : ''}>${item.name}</option>`);
    });
  });

  $('#update-pin-btn').on('click', (e) => {
    e.preventDefault();

    const data = {
      image: $('#image').val() || false,
      name: $('#name').val() || false,
      boardUid: $('#board').val() || false,
    };

    if (Object.values(data).includes(false)) {
      $('#error-message').html(
        '<div class="alert alert-danger" role="alert">Please complete all fields</div>'
      );
    } else {
      $('#error-message').html('');

      pinData.updatePin(pinObject.firebaseKey, data)
        .then(() => {
          $('#success-message').html(
            '<div class="alert alert-success" role="alert">Your pin Was updated!</div>'
          );

          setTimeout(() => {
            $('#success-message').html('');
          }, 3000);
        }).catch((error) => console.warn(error));
    }
  });
};

export default { updatePinForm };
