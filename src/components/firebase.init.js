// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBprODEyamSiCkSxM9vGnhz5_pwq821SNk",
    authDomain: "react-ema-john-bc0de.firebaseapp.com",
    projectId: "react-ema-john-bc0de",
    storageBucket: "react-ema-john-bc0de.appspot.com",
    messagingSenderId: "369285655298",
    appId: "1:369285655298:web:b2223d3383eb161e73701b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default app;