import React from 'react';
import SideNav from '../../components/SideNav';
import './profile.css';

const Profile = () => {
    return(
        <div className="profilePage">
            <div className="profileHeader">
                <SideNav />
            </div>
            <div className='profileContent'> 
                <div> Test </div>
            </div>
            <h1>Profile</h1>
        </div>
    )
}

export default Profile;