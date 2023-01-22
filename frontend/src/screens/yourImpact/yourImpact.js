import React from "react";
import ProfileCard from "../../components/ProfileCard";
import SideNav from "../../components/SideNav";
import { ProfilePage } from "../../pages/Profile";
import "./yourImpact.css";


const YourImpact = () => {
  return (
    <div className="yourImpactPage">
      <div className="yourImpactHeader">
        <SideNav />
        <ProfileCard username="Mode Demo" name="Jane"/>
      </div>
      <div className="yourImpactContent">
        <ProfilePage />
      </div>
    </div>
  );
};

export default YourImpact;
