// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBNvwAlCjvAq2z6YD4Q59o0VFyJhu2fXP4",
    authDomain: "pokeapi-cb856.firebaseapp.com",
    projectId: "pokeapi-cb856",
    storageBucket: "pokeapi-cb856.appspot.com",
    messagingSenderId: "676180637747",
    appId: "1:676180637747:web:9661a046a1cbfcb24f0b46"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);