import pinData from '../../helpers/data/pinData';
import cards from '../cards/pinsCard';

const pinsView = () => {
  pinData.getPins().then((response) => {
    response.forEach((item) => {
      $('#app').append(cards.pinMaker(item));
    });
  });
};

export default { pinsView };
