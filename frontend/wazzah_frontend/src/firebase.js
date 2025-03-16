// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDt6p7yOhQx11a2-AnUePhAsb-0QQlaVDQ",
  authDomain: "testing-5b515.firebaseapp.com",
  projectId: "testing-5b515",
  storageBucket: "testing-5b515.firebasestorage.app",
  messagingSenderId: "272990440522",
  appId: "1:272990440522:web:f93282633afb29a6336ab3",
  measurementId: "G-HH9BWF31XJ"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const db = getFirestore(app)
//export {app, analytics};