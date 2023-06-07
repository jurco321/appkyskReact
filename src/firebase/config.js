// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB5C60SxPpX-OBuIh4mzY-cZdXGtIvDcQ0",
    authDomain: "appkysk-f1f60.firebaseapp.com",
    projectId: "appkysk-f1f60",
    storageBucket: "appkysk-f1f60.appspot.com",
    messagingSenderId: "680691983121",
    appId: "1:680691983121:web:d636ca0b39e57e7446e2b0",
    measurementId: "G-V8RDL270ZF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth( app );
const firestore = getFirestore( app );
const analytics = getAnalytics(app);

export { auth };
export { firestore };
