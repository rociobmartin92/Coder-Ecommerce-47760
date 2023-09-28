// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBout7Gh9xN9ONmn2W4UILbmWcUmcmZlIY",
  authDomain: "ecommerce-17ed3.firebaseapp.com",
  databaseURL: "https://ecommerce-17ed3-default-rtdb.firebaseio.com",
  projectId: "ecommerce-17ed3",
  storageBucket: "ecommerce-17ed3.appspot.com",
  messagingSenderId: "284016553850",
  appId: "1:284016553850:web:ff3ba4ee714fd1a48270c3",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const firebase_auth = getAuth(app);
