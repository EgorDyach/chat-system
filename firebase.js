import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyAQXfDD7l5K2sPNDctMoNJcBTWHynN85y4",
    authDomain: "test-2538b.firebaseapp.com",
    projectId: "test-2538b",
    storageBucket: "test-2538b.appspot.com",
    messagingSenderId: "737513696485",
    appId: "1:737513696485:web:a86f3c55ffa8fadd00b80c"
  };
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();