// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtSDIIfVzryIdzqq60kPdE_Nqu1Rk6pmc",
  authDomain: "blogging-app-main-recent.firebaseapp.com",
  projectId: "blogging-app-main-recent",
  storageBucket: "blogging-app-main-recent.appspot.com",
  messagingSenderId: "854332825329",
  appId: "1:854332825329:web:f45829002910f9e0b49350"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);