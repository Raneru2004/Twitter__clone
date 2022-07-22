// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQkrbQc_vVm7DYs5pZG4qb0dD-CYj65K8",
  authDomain: "twitter-clone-38c00.firebaseapp.com",
  projectId: "twitter-clone-38c00",
  storageBucket: "twitter-clone-38c00.appspot.com",
  messagingSenderId: "554460598293",
  appId: "1:554460598293:web:5e985a60a9acf174f47e1c",
  measurementId: "G-L00X44R8HL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore();
export default db;