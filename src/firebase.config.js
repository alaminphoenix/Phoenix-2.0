// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARqhkBb9-ii2yjoI_ISrSoncaC2hGvTes",
  authDomain: "al-amin-8fbf0.firebaseapp.com",
  projectId: "al-amin-8fbf0",
  storageBucket: "al-amin-8fbf0.firebasestorage.app",
  messagingSenderId: "619933806590",
  appId: "1:619933806590:web:7531ddff64572172f41aaf",
  measurementId: "G-1TNETLW3MW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default app