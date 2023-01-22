import React from "react";
import "./test.css";
import appColor from "../../constants.js";
import { NavLink } from "react-router-dom";
import { collection, addDoc, getDocs} from "firebase/firestore";
import db from "../../firebase.js";



const Test = () => {
    const form = new FormData();

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
        db.collection("clothing").doc("a12345").set({
            name: "Frank",
            favorites: {
              food: "Pizza",
              color: "Blue",
              subject: "Recess"
            },
            age: 12
          }).then(function() {
            console.log("Frank created");
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