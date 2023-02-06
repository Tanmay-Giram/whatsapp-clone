import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyDD-xekpIz_VUE1NV6DkUnvE7QfQuwsk8w",
    authDomain: "whatsapp-2-15caf.firebaseapp.com",
    projectId: "whatsapp-2-15caf",
    storageBucket: "whatsapp-2-15caf.appspot.com",
    messagingSenderId: "347473005406",
    appId: "1:347473005406:web:78537ff620cd4724b89dcf"
  };
  
const app = !firebase.app.length 
  ? firebase.initializeapp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();