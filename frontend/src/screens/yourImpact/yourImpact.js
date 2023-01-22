import React from "react";
import SideNav from "../../components/SideNav";
import { ProfilePage } from "../../pages/Profile";


const YourImpact = () => {
  return (
    <div className="profilePage">
      <div className="profileHeader">
        <SideNav />
      </div>
      <div className="profileContent">
        <ProfilePage />
      </div>
    </div>
  );
};

export default YourImpact;
