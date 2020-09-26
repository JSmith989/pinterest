// import axios from 'axios';
// import apiKeys from '../apiKeys.json';

// const baseUrl = apiKeys.firebaseKeys.databaseURL;

// const getUsers = () => new Promise((resolve, reject) => {
//   axios.get(`${baseUrl}/users.json`).then((response) => {
//     const pinUsers = response.data;
//     const users = [];
//     if (pinUsers) {
//       Object.keys(pinUsers).forEach((userId) => {
//         users.push(pinUsers[userId]);
//       });
//     }
//     resolve(users);
//   }).catch((error) => reject(error));
// });

// const checkIfUserExistsInFirebase = (user) => {
//   axios
//     .get(`${baseUrl}/users.json?orderBy="uid"&equalTo="${user.uid}"`)
//     .then((resp) => {
//       if (Object.values(resp.data).length === 0) {
//         axios.post(`${baseUrl}/users.json`, user)
//           .then((response) => {
//             const update = { firebaseKey: response.data.name };
//             axios.patch(`${baseUrl}/users/${response.data.name}.json`, update);
//           }).catch((error) => console.warn(error));
//       } else {
//         console.warn('User Already Exists');
//       }
//       // NOTE FOR STUDENTS
//       // Set session storage after we know that user is in DB so that we do not hit the API again during this session. Limit hits to the API.
//       window.sessionStorage.setItem('ua', true);
//     })
//     .catch((error) => console.error(error));
// };

// const setCurrentUser = (userObj) => {
//     const user = {
//       image: userObj.photoURL,
//       uid: userObj.uid,
//       name: userObj.displayName,
//       email: userObj.email,
//       lastSignInTime: userObj.metadata.lastSignInTime,
//     };
