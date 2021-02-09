import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDFCW2HbnbaBDEO9Xlm7XxuPnjZVLtEkWc",
    authDomain: "expensify-a0574.firebaseapp.com",
    databaseURL: "https://expensify-a0574-default-rtdb.firebaseio.com",
    projectId: "expensify-a0574",
    storageBucket: "expensify-a0574.appspot.com",
    messagingSenderId: "130224766976",
    appId: "1:130224766976:web:7e6ace0ca9c0a81c6a18e5",
    measurementId: "G-02HBYTT8Z6"
  };

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };