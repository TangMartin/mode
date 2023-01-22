import React from 'react';
import { useForm } from "react-hook-form";

import SideNav from '../../components/SideNav';
import './upload.css';


const Upload = () => {
    console.log("REGISTER ")
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return(
        <div className="uploadPage">
            <div className="uploadHeader">
                <SideNav />
            </div>
            <div className="uploadContent"> 
                <div className="uploadTitle">
                    Upload Your Item
                </div>
                <div className="uploadForm">
                       <form>
                            <input {...register("firstName")} />
                            <select {...register("gender")}>
                                <option value="female">female</option>
                                <option value="male">male</option>
                                <option value="other">other</option>
                            </select>
                            <input type="submit" />
                        </form>
                </div>
            </div>
        </div>
    )
};

export default Upload;