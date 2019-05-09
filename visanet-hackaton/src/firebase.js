import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyCseSlKaDwxTero4dxFyoBogKs7K5hHeC8",
    authDomain: "visanet-53215.firebaseapp.com",
    databaseURL: "https://visanet-53215.firebaseio.com",
    projectId: "visanet-53215",
    storageBucket: "visanet-53215.appspot.com",
    messagingSenderId: "766155927360",
    appId: "1:766155927360:web:cbfd8e8b789ca3a8"
  };
  firebase.initializeApp(firebaseConfig);
 
  export default firebase;