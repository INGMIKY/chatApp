// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMPmn-QFaX6YGYLuL0MfTDepj5ifEWOmk",
  authDomain: "chat-app-bb90e.firebaseapp.com",
  projectId: "chat-app-bb90e",
  storageBucket: "chat-app-bb90e.appspot.com",
  messagingSenderId: "879724647115",
  appId: "1:879724647115:web:1d7306009416cdcad4014e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);