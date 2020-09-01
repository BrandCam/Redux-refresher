import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBhHq3wtSY8zLca0YHjLyP-klbkrEZaLHI",
  authDomain: "react-burger-buddy.firebaseapp.com",
  databaseURL: "https://react-burger-buddy.firebaseio.com",
  projectId: "react-burger-buddy",
  storageBucket: "react-burger-buddy.appspot.com",
  messagingSenderId: "583563472469",
  appId: "1:583563472469:web:b24f9e72bbaec6d62eeedc",
  measurementId: "G-W3V64XH8SH",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;
