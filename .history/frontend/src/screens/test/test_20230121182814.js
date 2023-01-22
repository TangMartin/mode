import React from "react";
import "./test.css";
import appColor from "../../constants.js";
import { NavLink } from "react-router-dom";

const Test = () => {

    function mint() {
        console.log("test");
    }

    return (
        <div>
            <button
            onClick={mint()}> Test </button>
        </div>
    )
}

export default Test;