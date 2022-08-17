import firebase from "firebase/app";
import "firebase/firestore"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDXBVz8PEEo39C2hHWyiu21ToVBrafKU-c",
  authDomain: "vue-blog-system-75f34.firebaseapp.com",
  projectId: "vue-blog-system-75f34",
  storageBucket: "vue-blog-system-75f34.appspot.com",
  messagingSenderId: "865493757256",
  appId: "1:865493757256:web:ab306d852acca1e2a5977d",
  measurementId: "G-0KJ9D555TQ"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// database setup
let db=firebase.firestore();
let timestamp=firebase.firestore.FieldValue.serverTimestamp

export {db,timestamp};