import pinData from '../../helpers/data/pinData';
import form from '../forms/updatePinForm';

const updatePinView = (pinFirebaseKey) => {
  $('#app').html('<div id="update-pin-form"></div>');
  pinData.getSinglePin(pinFirebaseKey).then((response) => {
    form.updatePinForm(response);
  });
  console.warn(pinFirebaseKey);
};

export default { updatePinView };
