// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "elysium-2c1a1.firebaseapp.com",
  projectId: "elysium-2c1a1",
  storageBucket: "elysium-2c1a1.appspot.com",
  messagingSenderId: "122352973587",
  appId: "1:122352973587:web:ae070e898c14075aa48ce6",
  measurementId: "G-LJQEMTJ1X6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)
const analytics = getAnalytics(app);