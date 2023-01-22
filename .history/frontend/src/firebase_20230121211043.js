// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCpuNFCcGjTadMyGPHUB61-1xt6__HWLK0",
    authDomain: "mode-nwhacks2023.firebaseapp.com",
    projectId: "mode-nwhacks2023",
    storageBucket: "mode-nwhacks2023.appspot.com",
    messagingSenderId: "460150458958",
    appId: "1:460150458958:web:dab22714ecc1dd4777911f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);


export default db;
