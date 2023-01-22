// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDtNf_rGy-7pLa05OJ91EuyCrfweQ6U5Bg",
    authDomain: "db-nwhacks2023.firebaseapp.com",
    projectId: "db-nwhacks2023",
    storageBucket: "db-nwhacks2023.appspot.com",
    messagingSenderId: "188191526621",
    appId: "1:188191526621:web:4348fa88896b5fae695534",
    measurementId: "G-6Z4NB1GDT9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);

export default db;
