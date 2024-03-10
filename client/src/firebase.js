// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-f451f.firebaseapp.com",
  projectId: "mern-auth-f451f",
  storageBucket: "mern-auth-f451f.appspot.com",
  messagingSenderId: "232901927648",
  appId: "1:232901927648:web:0508f73c70c6a08ba0e685"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);