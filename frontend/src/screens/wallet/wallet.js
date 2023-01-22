import React from "react";
import ProfileCard from "../../components/ProfileCard";
import SideNav from "../../components/SideNav";
import { ProfilePage } from "../../pages/Profile";
import "./wallet.css";


const Wallet = () => {
  return (
    <div className="walletPage">
      <div className="walletHeader">
        <SideNav />
        <ProfileCard username="Mode Demo" name="Jane"/>
      </div>
      <div className="walletContent">
        <ProfilePage />
      </div>
    </div>
    
  );
};

export default Wallet;
