import React from "react";
import "./test.css";
import appColor from "../../constants.js";
import { NavLink } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore"; 
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";



const Test = () => {
    const form = new FormData();

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

    function mint() {
        form.append('allowPlatformToOperateToken', 'true');
        form.append('chain', 'goerli');
        form.append('filePath', "../../assets/beigeshirt.png");
        form.append('name', "Beige Shirt");
        form.append('description', 'Test #2');
        form.append('recipientAddress', '0xA02286E881800c558b8b6Bd7699A068C0B9a1bbB');

        const options = {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'X-API-Key': 'sk_live_f0b98b7e-03d5-46b7-847c-c755e883b91e'
        }
        };

        options.body = form;

        fetch('https://api.verbwire.com/v1/nft/mint/quickMintFromFile', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
    }

    const addTodo = async (e) => {
        await setDoc(doc(db, "cities", "LA"), {
            name: "Los Angeles",
            state: "CA",
            country: "USA"
          });
    }

    return (
        <div>
            <button
            onClick={addTodo}> test </button>
            <img src={require("../../assets/beigeshirt.png")} alt="beigeshirt" />
            
            
        </div>
    )
}

export default Test;