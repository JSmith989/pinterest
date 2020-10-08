// import pinData from '../../helpers/data/pinData';

const pinMaker = (pinObject) => {
  const domString = `<div class="card pin" style="width: 30rem;" 
  id=${pinObject.uid}>
                        <img class="card-img-top" src="${pinObject.image}" alt="Card image cap">
                        <div class="card-body">
                          
                          <a href="#" id="${pinObject.uid}" class="btn btn-danger delete-board">Delete Pin</a>
                        </div>
                      </div>`;
  return domString;
};

export default { pinMaker };
