// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_APP_FIREBASE_API_KEY,
  authDomain:import.meta.env.VITE_REACT_APP_FIREBASE_AUTH_DOMAIN ,
  projectId: import.meta.env.VITE_REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket:import.meta.env.VITE_REACT_APP_FIREBASE_STORAGE_BUCKET ,
  messagingSenderId: import.meta.env.VITE_REACT_APP_FIREBASE_MASSAGING_SENDER,
  appId: import.meta.env.VITE_REACT_APP_APP_ID
};


// REACT_APP_FIREBASE_API_KEY =AIzaSyDgTsCdXJhM-msHeA4TYGqXAjrvPKNduYM
// REACT_APP_FIREBASE_AUTH_DOMAIN =netflix-react-yt-63dcf.firebaseapp.com
// REACT_APP_FIREBASE_PROJECT_ID =netflix-react-yt-63dcf
// REACT_APP_FIREBASE_STORAGE_BUCKET =netflix-react-yt-63dcf.appspot.com
// REACT_APP_FIREBASE_MASSAGING_SENDER =201035631863
// REACT_APP_APP_ID =1:201035631863:web:796d9a36f30ba23bdc97f2

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const  db = getFirestore(app);

