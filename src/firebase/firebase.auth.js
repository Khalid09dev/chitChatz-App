// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDWRI4ZD4JW7iBgRTW6N3dof_DYZMbdSx8",
    authDomain: "chitchatz-29217.firebaseapp.com",
    projectId: "chitchatz-29217",
    storageBucket: "chitchatz-29217.appspot.com",
    messagingSenderId: "369023724362",
    appId: "1:369023724362:web:0e8afbdbd8bd5bce3a2fb3",
    measurementId: "G-S69BYDW774"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;