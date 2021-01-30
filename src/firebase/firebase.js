import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCFRw19Na6XYNYIh6O6B_PcilQNOSwwwk8",
  authDomain: "pandora-clone-a40a3.firebaseapp.com",
  databaseURL: "https://pandora-clone-a40a3.firebaseio.com",
  projectId: "pandora-clone-a40a3",
  storageBucket: "pandora-clone-a40a3.appspot.com",
  messagingSenderId: "136119131636",
  appId: "1:136119131636:web:28233acdb727d1e6d7ada1",
  measurementId: "G-0GR7H48HF6",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let database = firebase.firestore();
export default database;
