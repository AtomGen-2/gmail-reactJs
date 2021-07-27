import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC8hsblbeDqIfAYRrtakAu1A90uS81Fke4",
    authDomain: "reactjs-f3239.firebaseapp.com",
    projectId: "reactjs-f3239",
    storageBucket: "reactjs-f3239.appspot.com",
    messagingSenderId: "560016054534",
    appId: "1:560016054534:web:6e85a5a20b7d0e60ef2687",
    measurementId: "G-JL9EXV604T"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };