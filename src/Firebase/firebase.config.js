// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoST4pNCtoTxDz54e6fbFZ-SIbAOaVDZE",
  authDomain: "cars-house-c6cfc.firebaseapp.com",
  projectId: "cars-house-c6cfc",
  storageBucket: "cars-house-c6cfc.appspot.com",
  messagingSenderId: "576077181957",
  appId: "1:576077181957:web:f2516240c5dea6a184186c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app