// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEd9n9Qc_bJY2RK7iQTAypMUug25qnR4g",
  authDomain: "hydrotech-5a694.firebaseapp.com",
  projectId: "hydrotech-5a694",
  storageBucket: "hydrotech-5a694.appspot.com",
  messagingSenderId: "519953460056",
  appId: "1:519953460056:web:218e14fa9ef4bfcf5a532d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth