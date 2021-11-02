import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'
 
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC3Po1eZf8bFcv_hG9b0xzpDpz3aj6jLuA",
  authDomain: "dammy-fa0ac.firebaseapp.com",
  projectId: "dammy-fa0ac",
  storageBucket: "dammy-fa0ac.appspot.com",
  messagingSenderId: "295294819945",
  appId: "1:295294819945:web:883fc8b97b1fc4d0eaccf8",
  measurementId: "G-J1M5ZS1MQD"
});

const db = firebaseApp.firestore()
const auth = firebase.auth()

export {db , auth}