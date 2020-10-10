import mergedData from '../../helpers/data/mergedData';
import cards from '../cards/pinsCard';

// const pinsView = () => {
//   mergedData.getDataForPinsView().then((response) => {
//     response.forEach((item) => {
//       $('#app').append(cards.pinMaker(item));
//     });
//   });
// };

const pinsView = () => {
  mergedData.getDataForPinsView()
    .then((response) => {
      console.warn(response);
      if (response.length) {
        response.forEach((pin) => {
          $('#app').append(cards.pinMaker(pin));
        });
      } else {
        $('#app').append('<h2>no pins</h2>');
      }
    });
};

export default { pinsView };
