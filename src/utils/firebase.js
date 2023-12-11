// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrtiH-dNGYWs1BNvEa_rvBwdQ9WTybuTg",
  authDomain: "react-6e6d5.firebaseapp.com",
  projectId: "react-6e6d5",
  storageBucket: "react-6e6d5.appspot.com",
  messagingSenderId: "571957053538",
  appId: "1:571957053538:web:4cc6027b5f10c39a58293b",
  measurementId: "G-Q2ZYKZ07X4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
