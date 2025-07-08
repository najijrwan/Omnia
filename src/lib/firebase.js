// src/lib/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; // optional for later use

const firebaseConfig = {
    apiKey: "AIzaSyDPl2_jplmdWodV9uHs08OJw39ZdfBn9ho",
    authDomain: "omnia-e6edd.firebaseapp.com",
    projectId: "omnia-e6edd",
    storageBucket: "omnia-e6edd.firebasestorage.app",
    messagingSenderId: "277442578848",
    appId: "1:277442578848:web:119457c69ff13f788efcc5",
    measurementId: "G-8MPBQY2LEQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Init services
export const db = getFirestore(app);
export const auth = getAuth(app); // export only if you’ll use auth

