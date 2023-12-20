// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "estate-listing.firebaseapp.com",
  projectId: "estate-listing",
  storageBucket: "estate-listing.appspot.com",
  messagingSenderId: "815324836670",
  appId: "1:815324836670:web:c7b276ff278d384cd2b26f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
