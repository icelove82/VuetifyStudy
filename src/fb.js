import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAigZsm1e05TUHzt46JBr6I_0zlxtniOU8",
  authDomain: "todo-ninja-a6247.firebaseapp.com",
  databaseURL: "https://todo-ninja-a6247.firebaseio.com",
  projectId: "todo-ninja-a6247",
  storageBucket: "todo-ninja-a6247.appspot.com",
  messagingSenderId: "367301204025",
  appId: "1:367301204025:web:eead233db779c0aa"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;
