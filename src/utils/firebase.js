// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAP9YByJbuhTqYaBlPrAvONzAR5AwlcNkA",
  authDomain: "netflix-fb8d9.firebaseapp.com",
  projectId: "netflix-fb8d9",
  storageBucket: "netflix-fb8d9.appspot.com",
  messagingSenderId: "176091229637",
  appId: "1:176091229637:web:23fc9fb6e5887d4021efac",
  measurementId: "G-0ZH5SQQZM8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
