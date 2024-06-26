import firebase, { initializeApp } from 'firebase/app';
import 'firebase/database';
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyC41KqAdvtd7_-H1u2nOSb66sh9xsOm9a0",
    authDomain: "testing-9d2f4.firebaseapp.com",
    projectId: "testing-9d2f4",
    storageBucket: "testing-9d2f4.appspot.com",
    messagingSenderId: "428654119658",
    appId: "1:428654119658:web:399386701c2b542c916593",
    measurementId: "G-C52486F7MX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
