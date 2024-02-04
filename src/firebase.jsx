// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAe1XC2QqQJCQ_gROs9wns3RCrk-1khXfk",
  authDomain: "scoremate-a55f3.firebaseapp.com",
  projectId: "scoremate-a55f3",
  storageBucket: "scoremate-a55f3.appspot.com",
  messagingSenderId: "421257726137",
  appId: "1:421257726137:web:088365b80719e163533368",
  measurementId: "G-JWQWVNGRFT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);