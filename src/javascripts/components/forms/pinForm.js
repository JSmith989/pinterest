import boardData from '../../helpers/data/boardData';
import pinData from '../../helpers/data/pinData';

const pinForm = () => {
  $('#pin-form').html(`
    <h2>Add a Pin</h2>
    <div id="success-message"></div>
    <form>
      <div id="error-message"></div>
      <div class="form-group">
        <label for="name">Pin Name</label>
        <input type="text" class="form-control" id="name" placeholder="Example: St. Andrews Golf Course">
      </div>
      <div class="form-group">
        <label for="imageURL">Image</label>
        <input type="text" class="form-control" id="imageURL" placeholder="Example: Photo URL">
      </div>
      <div class="form-group">
        <label for="yourBoard">Board</label>
          <select class="form-control" id="yourBoard">
            <option value="">Select a Board</option>
          </select>
      </div>
      <button id="add-pin-btn" type="submit" class="btn btn-info"><i class="fas fa-plus-circle"></i> Add Pin</button>
    </form>
    `);

  boardData.getBoards().then((response) => {
    response.forEach((item) => {
      $('select').append(`<option value="${item.boardUid}">${item.name}</option>`);
    });
  });

  $('#add-pin-btn').on('click', (e) => {
    e.preventDefault();

    const data = {
      name: $('#name').val() || false,
      image: $('#imageURL').val() || false,
      boardUid: $('#yourBoard').val() || false
    };

    if (Object.values(data).includes(false)) {
      $('#error-message').html('<div class="alert alert-danger" role="alert">Please complete all fields</div>');
    } else {
      $('#error-message').html('');

      pinData.addPin(data)
        .then(() => {
          $('#success-message').html('<div class="alert alert-success" role="alert">Your Pin Was Added!</div>');

          setTimeout(() => {
            $('#success-message').html('');
          }, 3000);
        }).catch((error) => console.warn(error));

      $('#name').val('');
      $('#imageURL').val('');
      $('#yourBoard').val('');
    }
  });
};

export default { pinForm };
