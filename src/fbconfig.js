// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDV7wNx_33-DneZZhMxImEBka6FS3WqKKw",
  authDomain: "kioskapp-9c5f7.firebaseapp.com",
  projectId: "kioskapp-9c5f7",
  storageBucket: "kioskapp-9c5f7.appspot.com",
  messagingSenderId: "1067810506698",
  appId: "1:1067810506698:web:788f1f8d088123b9a4b133"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);


