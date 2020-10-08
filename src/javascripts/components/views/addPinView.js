import form from '../forms/pinForm';

const addPinView = () => {
  $('#app').html('<div id="pin-form">Put pin form here</div>');
  form.pinForm();
};

export default { addPinView };
