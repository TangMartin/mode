import React from "react";
import ItemShowcase from "../../components/ItemShowcase";
import ProfileCard from "../../components/ProfileCard";
import SideNav from "../../components/SideNav";
import { Box } from "@mui/material";
import "./marketplace.css";
import SearchIcon from "@mui/icons-material/Search";
import MarketplaceCard from "../../components/MarketplaceCard";
import beigeShirt from "../../assets/beigeshirt.png";
import blackDress from "../../assets/blackDress.png";
import denimJacket from "../../assets/denimJacket.png";
import purplePuffer from "../../assets/hoodedjacket.jpg";
import blackCardigan from "../../assets/patterncardigan.png";
import redShirt from "../../assets/redshirt.png";

const Marketplace = () => {
  const props = [
    {
      name: "Plaid T-Shirt",
      brand: "Uniqlo",
      size: "Medium",
      image: beigeShirt,
    },
    {
      name: "Black Dress",
      brand: "Aritzia",
      size: "Small",
      image: blackDress,
    },
    {
      name: "Hooded Denim Jacket",
      brand: "Levis",
      size: "Large",
      image: denimJacket,
    },
    {
      name: "Purple Puffer",
      brand: "Aritzia",
      size: "Medium",
      image: purplePuffer,
    },
  ];

  return (
    <div className="marketplacePage">
      <div className="marketplaceHeader">
        <SideNav />
        {/* <ProfileCard username="Mode Demo" name="Jane" /> */}
      </div>
      <div className="marketplaceContent">
        {/* <ItemShowcase/> */}
        <Box className="marketplace-upper-container">
          <Box className="marketplace-upper-tools">
            <Box className="marketplace-search">
              <SearchIcon style={{ marginLeft: "5%" }} />
              <div className="search-for-anything">Search for items...</div>
            </Box>
            <button className="marketplace-upload">UPLOAD</button>
          </Box>
          <div className="marketplace-title">Marketplace</div>
        </Box>
        <Box className="marketplace-items-container">
          <MarketplaceCard {...props} />
          <MarketplaceCard {...props} />
          <MarketplaceCard {...props} />
          <MarketplaceCard {...props} />
          <MarketplaceCard {...props} />
          <MarketplaceCard {...props} />
          <MarketplaceCard {...props} />
          <MarketplaceCard {...props} />
          {/* <div className="marketplace-item">
            <MarketplaceCard {...props} />
          </div>
          <div className="marketplace-item">
            <MarketplaceCard {...props} />
          </div>
          <div className="marketplace-item">
            <MarketplaceCard {...props} />
          </div>
          <div className="marketplace-item">
            <MarketplaceCard {...props} />
          </div>
          <div className="marketplace-item">
            <MarketplaceCard {...props} />
          </div>
          <div className="marketplace-item">
            <MarketplaceCard {...props} />
          </div>
          <div className="marketplace-item">
            <MarketplaceCard {...props} />
          </div>
          <div className="marketplace-item">
            <MarketplaceCard {...props} />
          </div> */}
        </Box>
      </div>
    </div>
  );
};

export default Marketplace;
