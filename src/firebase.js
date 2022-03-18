// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import database from "firebase/compat/database";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTPpFE7zzZ1k-m1i98pFkI-EVYwhtMajk",
  authDomain: "sales-whale-app.firebaseapp.com",
  databaseURL:
    "https://sales-whale-app-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "sales-whale-app",
  storageBucket: "sales-whale-app.appspot.com",
  messagingSenderId: "411442379056",
  appId: "1:411442379056:web:899b3bbb90984f6e1e70f5",
  measurementId: "G-YSYFSKWSQ1",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
export default firebaseApp;
