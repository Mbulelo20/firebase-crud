import firebase from '/firebase/app';
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyC7k7l_ikxjsjhoykzcl-ybIwDOU4N2p9A",
    authDomain: "fireblogs-ec6a9.firebaseapp.com",
    projectId: "fireblogs-ec6a9",
    storageBucket: "fireblogs-ec6a9.appspot.com",
    messagingSenderId: "189738862318",
    appId: "1:189738862318:web:ac5010ab0acffcac0315ff",
    measurementId: "G-507L6FFY5E"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig) // intialize app
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {timestamp};
export default firebaseApp.firestore();