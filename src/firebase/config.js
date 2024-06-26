// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQOQjZscuv0Ffpip7zopc3yeZNOUk1PFw",
  authDomain: "ecommerce-1a648.firebaseapp.com",
  projectId: "ecommerce-1a648",
  storageBucket: "ecommerce-1a648.appspot.com",
  messagingSenderId: "196240052352",
  appId: "1:196240052352:web:e3836a264ba6bb82811665",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
