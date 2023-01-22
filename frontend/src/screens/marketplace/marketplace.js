import React from 'react';
import ItemShowcase from '../../components/ItemShowcase';
import ProfileCard from '../../components/ProfileCard';
import SideNav from '../../components/SideNav';
import { Box } from '@mui/material';
import './marketplace.css';
import SearchIcon from '@mui/icons-material/Search';

const Marketplace = () => {
    return(
        <div className="marketplacePage">
            <div className="marketplaceHeader">
                <SideNav />
                <ProfileCard username="Mode Demo" name="Jane"/>
            </div>
            <div className='marketplaceContent'> 
                {/* <ItemShowcase/> */}
                <Box className="marketplace-upper-container">
                    <Box className="marketplace-upper-tools">
                        <Box className="marketplace-search">
                            <SearchIcon style={{marginLeft: "5%"}}/>
                            <div className="search-for-anything">Search for items...</div>
                        </Box>
                        <button className="marketplace-upload">UPLOAD</button>
                    </Box>
                    <div className="marketplace-title">Marketplace</div>
                </Box>
                <Box className="marketplace-lower-container">
                    
                </Box>
            </div>
        </div>
    )
}

export default Marketplace;