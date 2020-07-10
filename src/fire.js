import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD6tKVSe7bxK29Ye7he0Ui0w7w-lFsA2b4",
    authDomain: "menu-app-8822b.firebaseapp.com",
    databaseURL: "https://menu-app-8822b.firebaseio.com",
    projectId: "menu-app-8822b",
    storageBucket: "menu-app-8822b.appspot.com",
    messagingSenderId: "771515841422",
    appId: "1:771515841422:web:78c7b7d4c4861e1dd102df",
    measurementId: "G-EREXP6TP5P"
  };    

  const fire = firebase.initializeApp(firebaseConfig)

  export default fire