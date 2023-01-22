import React from 'react';
import ItemShowcase from '../../components/ItemShowcase';
import ProfileCard from '../../components/ProfileCard';
import SideNav from '../../components/SideNav';
import './marketplace.css';

const Marketplace = () => {
    return(
        <div className="marketplacePage">
            <div className="marketplaceHeader">
                <SideNav />
                <ProfileCard username="Mode Demo" name="Jane"/>
            </div>
            <div className='marketplaceContent'> 
                {/* <div> Test </div> */}
                <ItemShowcase/>
            </div>
            {/* <h1>Marketplace</h1> */}
        </div>
    )
}

export default Marketplace;