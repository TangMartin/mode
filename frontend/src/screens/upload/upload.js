import React from 'react';
import SideNav from '../../components/SideNav';
import './upload.css';

const Upload = () => {
    return(
        <div className="uploadPage">
            <div className="uploadHeader">
                <SideNav />
            </div>
            <div className="uploadContent"> 
                <div> Test </div>
            </div>
            <h1>Upload</h1>
        </div>
    )
}

export default Upload;