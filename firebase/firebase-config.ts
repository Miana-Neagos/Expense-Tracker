// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZ_XGSvDa96LvHKwP2vf1HXnF_R3Itabg",
  authDomain: "expense-tracker-6b2a5.firebaseapp.com",
  databaseURL: "https://expense-tracker-6b2a5-default-rtdb.firebaseio.com",
  projectId: "expense-tracker-6b2a5",
  storageBucket: "expense-tracker-6b2a5.firebasestorage.app",
  messagingSenderId: "881783339694",
  appId: "1:881783339694:web:42b87953832d1533084b3f",
  measurementId: "G-XGXRCT6X53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getDatabase(app);