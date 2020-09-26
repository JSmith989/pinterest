import firebase from 'firebase/app';
import 'firebase/auth';
// import userData from './userData';
import auth from '../../components/auth/auth';
import myNavbar from '../../components/myNavbar/myNavbar';
// import viewHelper from '../viewHelpers';

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // const currentUser = userData.setCurrentFarmer(user);
      myNavbar.myNavbar(user);
      // viewHelper.viewListener('boards-link');
    } else {
      auth.loginButton();
      $('#nav').html('');
    }
  });
};

export default { checkLoginStatus };
