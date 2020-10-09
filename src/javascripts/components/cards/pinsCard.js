import pinData from '../../helpers/data/pinData';

const pinMaker = (pinObject) => {
  const domString = `<div class="card pin" style="width: 30rem;" 
  id=${pinObject.firebaseKey}>
                        <img class="card-img-top" src="${pinObject.image}" alt="Card image cap">
                        <div class="card-body">
                          
                          <a href="#" id="${pinObject.firebaseKey}" class="btn btn-danger delete-pin">Delete Pin</a>
                        </div>
                      </div>`;
  $('body').on('click', '.delete-pin', (e) => {
    e.stopImmediatePropagation();
    const firebaseKey = e.currentTarget.id;
    $(`.card#${firebaseKey}`).remove();
    pinData.deletePin(firebaseKey);
    console.warn(firebaseKey);
  });

  return domString;
};

export default { pinMaker };
