const firebaseConfig = {
    apiKey: "AIzaSyBu0u3kGchc9XJoXkUVVxnc4cXOi-9qfSE",
    authDomain: "the-recipe-able-app.firebaseapp.com",
    databaseURL: "https://the-recipe-able-app.firebaseio.com",
    projectId: "the-recipe-able-app",
    storageBucket: "the-recipe-able-app.appspot.com",
    messagingSenderId: "4309724949",
    appId: "1:4309724949:web:da3a3254c08bec1f26031c"
  };

firebase.initializeApp(firebaseConfig);
// database snapshot
const db = firebase.database();
// console.log(database);
const auth = firebase.auth();