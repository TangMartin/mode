import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCpuNFCcGjTadMyGPHUB61-1xt6__HWLK0",
    authDomain: "mode-nwhacks2023.firebaseapp.com",
    projectId: "mode-nwhacks2023",
    storageBucket: "mode-nwhacks2023.appspot.com",
    messagingSenderId: "460150458958",
    appId: "1:460150458958:web:fabf7a4e510da52f77911f"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
