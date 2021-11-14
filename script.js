// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAh-ZvipqzkYhThbsB88ZVz3Itq4hShPSE",
    authDomain: "blog-1a912.firebaseapp.com",
    projectId: "blog-1a912",
    storageBucket: "blog-1a912.appspot.com",
    messagingSenderId: "376069137801",
    appId: "1:376069137801:web:aa7322f0d27623e07a2d58",
    measurementId: "G-E3VNTCT4K0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
