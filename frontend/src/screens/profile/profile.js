import React from "react";
import ProfileCard from "../../components/ProfileCard";
import SideNav from "../../components/SideNav";
import { ProfilePage } from "../../pages/Profile";
import "./profile.css";

const Profile = () => {
  return (
    <div className="profilePage">
      <div className="profileHeader">
        <SideNav />
        <ProfileCard username="Mode Demo" name="Jane"/>
      </div>
      <div className="profileContent">
        <ProfilePage />
      </div>
    </div>
  );
};

export default Profile;
