import React from "react";
import { Box, CardMedia } from "@mui/material";
import "./index.css";
import test from "../../assets/beigeshirt.png";

const MarketplaceCard = (props) => {
  const { brand, size, name, image } = props;
  return (
    <Box className="marketplace-card">
      <Box className="marketplace-card-image-container">
        <img className="marketplace-item-image" src={image} alt="FUK" />
      </Box>
      <Box className="marketplace-card-info-container">
        <Box className="marketplace-card-brand-size">
          <div className="marketplace-card-brand">{brand}</div>
          <div className="marketplace-card-size">{size[0]}</div>
        </Box>
        <Box className="marketplace-card-name-container">
          <div className="marketplace-card-name">{name}</div>
        </Box>
      </Box>
    </Box>
  );
};

export default MarketplaceCard;
