import React, { useState } from "react";
import ItemShowcase from "../../components/ItemShowcase";
import ProfileCard from "../../components/ProfileCard";
import SideNav from "../../components/SideNav";
import { Box } from "@mui/material";
import "./marketplace.css";
import SearchIcon from "@mui/icons-material/Search";
import MarketplaceCard from "../../components/MarketplaceCard";

import beigeShirt from "../../assets/beigeshirt.png";
import blackDress from "../../assets/blackdress.png";
import denimJacket from "../../assets/denimjacket.png";
import purplePuffer from "../../assets/hoodedjacket.jpg";
import blackCardigan from "../../assets/patterncardigan.png";
import redShirt from "../../assets/redshirt.png";
import sample_cardigan from "../../assets/sample_cardigan.jpg";
import sweatshirt from "../../assets/sweatshirt.webp";
import { NavLink } from "react-router-dom";

const Marketplace = () => {
  const setItem = "heklo";
  //   const [item, setItem] = useState(null);
  const props = [
    {
      name: "Plaid T-Shirt",
      brand: "Uniqlo",
      size: "Medium",
      image: beigeShirt,
      colour: "#FFFFFF",
      description: "Asdf",
      sellerName: "Jeremy",
      username: "Mode Fan112",
      setItem: setItem,
    },
    {
      name: "Black Dress",
      brand: "Aritzia",
      size: "Small",
      image: blackDress,
      colour: "#FFFFFF",
      description: "Asdf",
      sellerName: "Jeremy",
      username: "Mode Fan112",
      setItem: setItem,
    },
    {
      name: "Hooded Denim Jacket",
      brand: "Levis",
      size: "Large",
      image: denimJacket,
      colour: "#FFFFFF",
      description: "Asdf",
      sellerName: "Jeremy",
      username: "Mode Fan112",
      setItem: setItem,
    },
    {
      name: "Purple Puffer",
      brand: "Aritzia",
      size: "Medium",
      image: purplePuffer,
      colour: "#FFFFFF",
      description: "Asdf",
      sellerName: "Jeremy",
      username: "Mode Fan112",
      setItem: setItem,
    },
    {
      name: "Black Cardigan",
      brand: "H&M",
      size: "Small",
      image: blackCardigan,
      colour: "#FFFFFF",
      description: "Asdf",
      sellerName: "Jeremy",
      username: "Mode Fan112",
      setItem: setItem,
    },
    {
      name: "Red Shirt",
      brand: "Off-White",
      size: "Large",
      image: redShirt,
      colour: "#FFFFFF",
      description: "Asdf",
      sellerName: "Jeremy",
      username: "Mode Fan112",
      setItem: setItem,
    },
    {
      name: "Patterned Cardigan",
      brand: "Garage",
      size: "Medium",
      image: sample_cardigan,
      colour: "#FFFFFF",
      description: "Asdf",
      sellerName: "Jeremy",
      username: "Mode Fan112",
      setItem: setItem,
    },
    {
      name: "Pink Sweatshirt",
      brand: "Garage",
      size: "Medium",
      image: sweatshirt,
      colour: "#FFFFFF",
      description: "Asdf",
      sellerName: "Jeremy",
      username: "Mode Fan112",
      setItem: setItem,
    },
  ];

  return (
    <div className="marketplacePage">
      <div className="marketplaceHeader">
        <SideNav />
        <ProfileCard username="Mode Demo" name="Jane" />
      </div>
      <div className="marketplaceContent">
        <Box className="marketplace-upper-container">
          <Box className="marketplace-upper-tools">
            <Box className="marketplace-search">
              <SearchIcon style={{ marginLeft: "5%" }} />
              <div className="search-for-anything">Search for items...</div>
            </Box>
            <div className="marketplace-upload">
              <NavLink to="/upload">
                <button className="marketplace-button">UPLOAD</button>
              </NavLink>
            </div>
          </Box>
          <div className="marketplace-title">Marketplace</div>
        </Box>
        <Box className="marketplace-items-container">
          <button onClick={setItem(props[0])}>
            <MarketplaceCard props={props[0]} />
          </button>
          <button onClick={setItem(props[1])}>
            <MarketplaceCard {...props[1]} />
          </button>
          <button onClick={setItem(props[2])}>
            <MarketplaceCard {...props[2]} />
          </button>
          <button onClick={setItem(props[3])}>
            <MarketplaceCard {...props[3]} />
          </button>
          <button onClick={setItem(props[4])}>
            <MarketplaceCard {...props[4]} />
          </button>
          <button onClick={setItem(props[5])}>
            <MarketplaceCard {...props[5]} />
          </button>
          <button onClick={setItem(props[6])}>
            <MarketplaceCard {...props[6]} />
          </button>
          <button onClick={setItem(props[7])}>
            <MarketplaceCard {...props[7]} />
          </button>

          {/* <MarketplaceCard {...props[1]} />
            <MarketplaceCard {...props[2]} />
            <MarketplaceCard {...props[3]} />
            <MarketplaceCard {...props[4]} />
            <MarketplaceCard {...props[5]} />
            <MarketplaceCard {...props[6]} />
            <MarketplaceCard {...props[7]} /> */}
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
      {/* {item ? (
        // <ItemShowcase {...item} />
        <div> asdf </div>
      ) : (
        <div className="marketplaceContent">
          <Box className="marketplace-upper-container">
            <Box className="marketplace-upper-tools">
              <Box className="marketplace-search">
                <SearchIcon style={{ marginLeft: "5%" }} />
                <div className="search-for-anything">Search for items...</div>
              </Box>
              <div className="marketplace-upload">
                <NavLink to="/upload">
                  <button className="marketplace-button">UPLOAD</button>
                </NavLink>
              </div>
            </Box>
            <div className="marketplace-title">Marketplace</div>
          </Box>
          <Box className="marketplace-items-container">
            <button onClick={setItem(props[0])}>
              <MarketplaceCard props={props[0]} />
            </button>
            <button onClick={setItem(props[1])}>
              <MarketplaceCard {...props[1]} />
            </button>
            <button onClick={setItem(props[2])}>
              <MarketplaceCard {...props[2]} />
            </button>
            <button onClick={setItem(props[3])}>
              <MarketplaceCard {...props[3]} />
            </button>
            <button onClick={setItem(props[4])}>
              <MarketplaceCard {...props[4]} />
            </button>
            <button onClick={setItem(props[5])}>
              <MarketplaceCard {...props[5]} />
            </button>
            <button onClick={setItem(props[6])}>
              <MarketplaceCard {...props[6]} />
            </button>
            <button onClick={setItem(props[7])}>
              <MarketplaceCard {...props[7]} />
            </button>

            {/* <MarketplaceCard {...props[1]} />
            <MarketplaceCard {...props[2]} />
            <MarketplaceCard {...props[3]} />
            <MarketplaceCard {...props[4]} />
            <MarketplaceCard {...props[5]} />
            <MarketplaceCard {...props[6]} />
            <MarketplaceCard {...props[7]} /> */}
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
      {/* </Box>
        </div>
      )} */}
    </div>
  );
};

export default Marketplace;
