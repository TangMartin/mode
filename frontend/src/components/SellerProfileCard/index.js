import React from "react";
import { Box } from "@mui/material";
import "./index.css";

const SellerProfileCard = (props) => {
  const name = props.name;
  const username = props.username; 

  return (
    <Box className="seller-container">
      <Box className="seller-picture-container">
        <div className="seller-picture">{username[0]}</div>
      </Box>
      <Box className="seller-names">
        <div className="username">{username}</div>
        <div className="person-name">{name}</div>
      </Box>
    </Box>
  )
}

export default SellerProfileCard;