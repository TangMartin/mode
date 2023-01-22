import React from 'react';
import { Box } from "@mui/material";
import "./index.css";

const ProfileCard = (props) => {
  const name = props.name;
  const username = props.username;
  return (
    <Box className="profile-card-container">
      <Box className="profile-card-inner-container">
        <Box className="profile-card-picture-container">
          <div className="profile-card-picture">{props.username[0]}</div>
        </Box>
        <Box className="profile-card-names">
          <div className="username">Mode Demo</div>
          <div className="person-name">Jane</div>
        </Box>
      </Box>
    </Box>
  )
}

export default ProfileCard;
