import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXROP7K-ysFG4sOEfk9B0loXJi5TiGymM",
  authDomain: "tinder-clone-d5a44.firebaseapp.com",
  projectId: "tinder-clone-d5a44",
  storageBucket: "tinder-clone-d5a44.appspot.com",
  messagingSenderId: "639887149898",
  appId: "1:639887149898:web:11954af8655952ba3ecfb3",
  measurementId: "G-5HBGPY764J",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;
