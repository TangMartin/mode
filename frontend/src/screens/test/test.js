import React from "react";
import "./test.css";
import appColor from "../../constants.js";
import { NavLink } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

import { doc, setDoc, collection, getDocs, addDoc} from "firebase/firestore"; 
import { getStorage, ref, uploadBytes, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { getApp } from "firebase/app";
import db from "../../firebase";



const Test = () => {
    const storage = getStorage();
    const form = new FormData();

    const firebaseApp = getApp();

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
    
    const retrievePhotos = async (e) => {
        getDownloadURL("test")
        .then((url) => {
            <img src={url}> </img>
        })
        .catch((error) => {
          // A full list of error codes is available at
          // https://firebase.google.com/docs/storage/web/handle-errors
          switch (error.code) {
            case 'storage/object-not-found':
              // File doesn't exist
              break;
            case 'storage/unauthorized':
              // User doesn't have permission to access the object
              break;
            case 'storage/canceled':
              // User canceled the upload
              break;
      
            // ...
      
            case 'storage/unknown':
              // Unknown error occurred, inspect the server response
              break;
          }
        });
    }

    const addClothing = async (e) => {
        let photoId = uuidv4();
        const storage = getStorage();
        const storageRef = ref(storage, `${photoId}.png`);
        
        try {
            const docRef = await addDoc(collection(db, "clothing"), {
              name: "Alan",
              size: "Mathison",
              brand: "Turing",
              colour: "1912",
              type: "Test",
              image_url: `${photoId}.png`
            });

            // 'file' comes from the Blob or File API
            uploadBytes(storageRef, "../../assets/beigeshirt.png").then((snapshot) => {
            console.log('Uploaded a blob or file!');
            });
          
            //console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
            
    }

    return (
        <div>
            <button onClick={mint}> test </button>
            <img src={require("../../assets/beigeshirt.png")} alt="beigeshirt" />
        </div>
    )
}

export default Test;