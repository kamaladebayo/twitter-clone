import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyAcuCjWRUg6IqSZ_UvYD1NL8vW6ELRy0Ws",
    authDomain: "twitter-clone-d65a4.firebaseapp.com",
    projectId: "twitter-clone-d65a4",
    storageBucket: "twitter-clone-d65a4.appspot.com",
    messagingSenderId: "156259377817",
    appId: "1:156259377817:web:6fe773a2dd2fc9b2210e08",
    measurementId: "G-9HFTCF24HG"
  };

 const firebaseApp = firebase.initializeApp(firebaseConfig);

 const db = firebaseApp.firestore();
 export default db;
