// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkdPAYSdBoSqGCX9QMrm3eHWsLN28KHhc",
  authDomain: "tripmate-9c1cb.firebaseapp.com",
  projectId: "tripmate-9c1cb",
  storageBucket: "tripmate-9c1cb.appspot.com",
  messagingSenderId: "205119588439",
  appId: "1:205119588439:web:6f06db6b4d7296c1027b12"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);