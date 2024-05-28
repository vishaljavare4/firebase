// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCc5z3lncfg4PiL4wlubaqNIa9Hq0grNfQ",
  authDomain: "reactauthentication-5abb2.firebaseapp.com",
  projectId: "reactauthentication-5abb2",
  storageBucket: "reactauthentication-5abb2.appspot.com",
  messagingSenderId: "846665214798",
  appId: "1:846665214798:web:dbe070d3b8ff26d2030c1f",
  measurementId: "G-GYBNLLCYTG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export {app,auth,db};