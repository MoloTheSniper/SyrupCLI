// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAk8zKepNvQrTCWc8Cq0lQ3Ws_58zIkLng",
  authDomain: "rnsyrup.firebaseapp.com",
  projectId: "rnsyrup",
  storageBucket: "rnsyrup.firebasestorage.app",
  messagingSenderId: "196132231546",
  appId: "1:196132231546:web:dcc091a021af2e446f5ec3"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB =  getFirestore(FIREBASE_APP);