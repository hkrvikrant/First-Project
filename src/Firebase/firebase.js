import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB72D4A9kR40pfYiKVbrndI7GOj0PLi7kE",
  authDomain: "new-rect-app.firebaseapp.com",
  databaseURL: "https://new-rect-app.firebaseio.com",
  projectId: "new-rect-app",
  storageBucket: "new-rect-app.appspot.com",
  messagingSenderId: "766840908510",
  appId: "1:766840908510:web:ad00ead1f206d25271304f",
  measurementId: "G-BVM2N5KG4N",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
