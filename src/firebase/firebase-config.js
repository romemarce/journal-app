import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD2-1lMggBYcR9GLI2EQE3RK3RG63o8pK8",
  authDomain: "react-app-cursos-2bb4f.firebaseapp.com",
  projectId: "react-app-cursos-2bb4f",
  storageBucket: "react-app-cursos-2bb4f.appspot.com",
  messagingSenderId: "605184849621",
  appId: "1:605184849621:web:348b792ef47d3ae20f545c",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
  db,
  googleAuthProvider,
  firebase
}