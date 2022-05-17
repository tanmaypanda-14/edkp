import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getDatabase, ref, set, child, get } from 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXv1hWm_SG_kHAfeFjRgNdFEIigT0KLFE",
  authDomain: "otp-test-93d73.firebaseapp.com",
  databaseURL: "https://otp-test-93d73-default-rtdb.firebaseio.com",
  projectId: "otp-test-93d73",
  storageBucket: "otp-test-93d73.appspot.com",
  messagingSenderId: "682449946366",
  appId: "1:682449946366:web:4c536bccce605688c507af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;