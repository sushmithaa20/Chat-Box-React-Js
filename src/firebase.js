import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBcYrVt6gfjVpuvNQP8EkNYMI5g4UoTGGc",
    authDomain: "chat-app-155d5.firebaseapp.com",
    projectId: "chat-app-155d5",
    storageBucket: "chat-app-155d5.appspot.com",
    messagingSenderId: "572254019508",
    appId: "1:572254019508:web:02b7ebaa20a3539b30dce1",
    measurementId: "G-60RFT8KQDT"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };