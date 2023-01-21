import React from 'react';
import SideNav from '../../components/SideNav';
import './marketplace.css';

const Marketplace = () => {
    return(
        <div className="marketplacePage">
            <div className="marketplaceHeader">
                <SideNav />
            </div>
            <div className='marketplaceContent'> 
                <div> Test </div>
            </div>
            <h1>Marketplace</h1>
        </div>
    )
}

export default Marketplace;