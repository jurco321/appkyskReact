// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBR1Kr9QjD4cbbF9HcAcg__SKVcTyZV96k",
    authDomain: "appkyskreact.firebaseapp.com",
    projectId: "appkyskreact",
    storageBucket: "appkyskreact.appspot.com",
    messagingSenderId: "230523837413",
    appId: "1:230523837413:web:1413e84a47b9de00802d0c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth( app );
const firestore = getFirestore( app );

export { auth };
export { firestore };
