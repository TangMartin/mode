import React from 'react';
import { Box, CardMedia, IconButton } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import "./index.css";
import test from "../../assets/sample_cardigan.jpg";
import SellerProfileCard from '../SellerProfileCard';


//  TODO: should make use of props
const ItemShowcase = () => {
  const ntc = require('ntcjs');

  return (
    <Box className="item-showcase-parent">
      <Box className="item-showcase-top-bar">
        {/* TODO: need to redirect to marketplace */}
        <IconButton>
          <ArrowBackIosIcon />
        </IconButton>
      </Box>
      <Box className="item-showcase-content">
        <Box className="item-showcase-image-container">
          <CardMedia src={test} component="img" className="item-showcase-image"/>
        </Box>
        <Box className="item-showcase-info">
          <Box className="item-showcase-info-upper">
            <Box className="item-showcase-info-brand">
              <div className="brand">Tiger of Sweden</div>
            </Box>
            <Box className="item-showcase-info-name">
              <div className="name">Black Wool Cardigan</div>
            </Box>
            <Box className="item-showcase-colour-size">
              <Box className="item-showcase-info-colour">
                <div className="colour">Colour: {ntc.name("#e08d5b")[1]}</div>
                <span className="swatch" style={{backgroundColor: "#e08d5b"}}/>
              </Box>
              <div className="size">Size: Medium</div>
            </Box>
          </Box>
          <Box className="item-showcase-info-lower">
            <Box className="item-showcase-info-description">
              <div className="description">"Minimally worn black cardigan purchased directly from Tiger of Sweden in 2021. No stains nor scratches and looking for a new home!"</div>
            </Box>
            <Box className="item-showcase-seller">
              <div className="sold-by">Sold By: </div>
              <SellerProfileCard name="Jennifer" username="Mode Thrifter" />
            </Box>
            <button className="order-button">ORDER</button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default ItemShowcase;