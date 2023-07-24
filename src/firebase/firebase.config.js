// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBmiqKKoag8v406LKXYwvvrdG7k3YBghQ",
  authDomain: "college-site-9919d.firebaseapp.com",
  projectId: "college-site-9919d",
  storageBucket: "college-site-9919d.appspot.com",
  messagingSenderId: "1722792910",
  appId: "1:1722792910:web:131f43aa5c8a1bb337899f",
  measurementId: "G-3JY15D0VDT",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
