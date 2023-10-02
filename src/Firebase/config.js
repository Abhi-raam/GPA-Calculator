// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcpzKuHcyXBTIgeTGdjVQ6AyIJvyiGSl4",
  authDomain: "gpa-calculator-5f2cd.firebaseapp.com",
  projectId: "gpa-calculator-5f2cd",
  storageBucket: "gpa-calculator-5f2cd.appspot.com",
  messagingSenderId: "885953585058",
  appId: "1:885953585058:web:42e80b99b10faeb0db9cfb",
  measurementId: "G-NP1R2PY76F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);