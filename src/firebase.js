import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDx61TVdCuu9ilq1Ys5bDD0-DjJO8Vtbkg",
    authDomain: "vue-login-52ade.firebaseapp.com",
    databaseURL: "https://vue-login-52ade.firebaseio.com",
    projectId: "vue-login-52ade",
    storageBucket: "vue-login-52ade.appspot.com",
    messagingSenderId: "1074540520908",
    appId: "1:1074540520908:web:f38dfa7d0aee2df8786969"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //variable que contiene las base de datos
  const db = firebase.firestore()
    //variable de autentificacion
  const auth = firebase.auth();

  //exportacion de db y auth para uso global
  export {db, auth}
