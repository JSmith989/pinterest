import firebase from 'firebase/app';
import 'firebase/auth';

const signMeIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

// const loginButton = () => {
//   const domString = `<div id="auth">
//                       <span style="font-size: 5em; color: black;"><i class="fab fa-pinterest"></i></span>
//                       <h4>Welcome to Pasture</h4>
//                       <button id="google-auth" class="btn btn-primary btn-lg">
//                         <i class="fab fa-google"></i></i>oogle Login
//                       </button>
//                     </div>`;

//   $('#app').html(domString);
//   $('#google-auth').on('click', signMeIn);
// };

const loginButton = () => {
  const domString = `<nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#"><span style="font-size: 2em; color: black;"><i class="fab fa-pinterest"></i></span></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" 
  data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

        <button id="google-auth" class="btn btn-primary btn-lg">
        <i class="fab fa-google"></i></i>oogle Login
        </button>
    
</nav>`;

  $('#app').html(domString);
  $('#google-auth').on('click', signMeIn);
};

export default { loginButton };
