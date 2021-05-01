import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBVG8A6UnlMhObpzArv1w8X2fyqYngKjbo",
    authDomain: "clone-c2b67.firebaseapp.com",
    databaseURL: "https://clone-c2b67.firebaseio.com",
    projectId: "clone-c2b67",
    storageBucket: "clone-c2b67.appspot.com",
    messagingSenderId: "708763859717",
    appId: "1:708763859717:web:c2f5b5eb14625b041fd56c",
    measurementId: "G-D3S1VCL732"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };