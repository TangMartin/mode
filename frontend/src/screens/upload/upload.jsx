import React from "react";
import { useForm } from "react-hook-form";
import ProfileCard from "../../components/ProfileCard";

import { doc, setDoc, collection, getDocs, addDoc} from "firebase/firestore"; 
import { getStorage, ref, uploadBytes, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import SideNav from "../../components/SideNav";
import "./upload.css";

import { v4 as uuidv4 } from 'uuid';
import { getApp } from "firebase/app";
import db from "../../firebase";


const Upload = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data.file[0].name);
    let img = data.file[0].name;

    switch(data.file[0].name) {
      case "aquasweatshirt.webp":
        img = "https://i.ibb.co/cYzYXGF/aquasweatshirt.webp";
        break;
      case "beigeshirt.webp":
        img = "https://i.ibb.co/4Kskdw3/beigeshirt.webp";
        break;
      case "denimjacket.webp":
        img = "https://i.ibb.co/0j0nkXR/denimjacket.webp";
        break;
      case "hoodedjacket.webp":
        img = "https://i.ibb.co/SVF4R8R/hoodedjacket.webp";
        break;
      case "twillpants.webp":
        img = "https://i.ibb.co/HPPwhF9/twillpants.webp";
        break;
      default:
        img = "https://i.ibb.co/cYzYXGF/aquasweatshirt.webp";
    }

    let photoId = uuidv4();
    const storage = getStorage();
    const storageRef = ref(storage, `${photoId}.png`);
    
    try {
        const docRef = addDoc(collection(db, "clothing"), {
          name: data.firstName,
          size: data.size,
          brand: data.brand,
          colour: data.color,
          type: data.type,
          image_url: `${photoId}.png`
        });

        uploadBytes(storageRef, "../../assets/beigeshirt.png").then((snapshot) => {
        console.log('Uploaded a blob or file!');
        });
      
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }

      const form = new FormData();
      form.append('chain', 'goerli');
      form.append('name', data.firstName);
      form.append('description', 'Color: ' + data.color + ' Size: ' + data.size + ' Brand: ' + data.brand);
      form.append('recipientAddress', '0xA02286E881800c558b8b6Bd7699A068C0B9a1bbB');
      form.append('data', [{"trait_type":"TraitType1","value":"TraitValue1"},{"trait_type":"TraitType2","value":"TraitValue2"}]);
      form.append('imageUrl', img);

      const options = {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'X-API-Key': 'sk_live_f0b98b7e-03d5-46b7-847c-c755e883b91e'
        }
      };

      options.body = form;

      fetch('https://api.verbwire.com/v1/nft/mint/quickMintFromMetadata', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));

  };



  return (
    <div className="uploadPage">
      <div className="uploadHeader">
        <SideNav />
        <ProfileCard username="Mode Demo" name="Jane"/>
      </div>
      <div className="uploadContent">
        <div className="uploadTitle">Upload Your Item</div>
        <div className="upload_subtitle">
          Clothing information <span className="red-star"></span>
        </div>
        <div className="upload-form-fields">
          <form
            className="form-fields-container"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="form-fields">
              <label className="form-labels">Name of Clothing: </label>
              <input
                placeholder="Type Here... "
                className="text-field"
                {...register("firstName")}
              />
            </div>
            <div className="form-fields">
              <label className="form-labels">Brand: </label>
              <input
                placeholder="Item Brand here"
                className="text-field"
                {...register("brand")}
              />
            </div>
            <div className="form-fields">
              <label className="form-labels">Colour:</label>
              <input
                placeholder="Item Colour here"
                className="text-field"
                {...register("color")}
              />
            </div>


            <div className="form-fields size-radio-buttons">
              <label className="size-labels">Size:</label>
              <label className="radio-field-item ">
                <input
                  className="radio-label"
                  {...register("size")}
                  type="radio"
                  value="x-small"
                  id="size-small"
                />
                XS - Extra Small
              </label>

              <label className="radio-field-item ">
                <input
                  className="radio-label"
                  {...register("size")}
                  type="radio"
                  value="small"
                  id="size-small"
                />
                S - Small
              </label>
              <label className="radio-field-item ">
                <input
                  className="radio-label"
                  {...register("size")}
                  type="radio"
                  value="medium"
                  id="size-medium"
                />
                M - Medium
              </label>
              <label className="radio-field-item ">
                <input
                  className="radio-label"
                  {...register("size")}
                  type="radio"
                  value="large"
                  id="size-large"
                />
                L - Large
              </label>
              <label className="radio-field-item ">
                <input
                  className="radio-label"
                  {...register("size")}
                  type="radio"
                  value="large"
                  id="size-large"
                />
                XL - Extra Large
              </label>
            </div>


            <div className="upload_semi-title ">
              Type of Clothing <span className="red-star"></span>
            </div>

            <div className="form-fields size-radio-buttons">
              <label className="radio-field-item ">
                <input
                  className="radio-label"
                  {...register("type")}
                  type="radio"
                  value="shirt"
                  id="type-small"
                />
                Shirt
              </label>

              <label className="radio-field-item ">
                <input
                  className="radio-label"
                  {...register("type")}
                  type="radio"
                  value="dress"
                  id="type-dress"
                />
                Dresses
              </label>
              <label className="radio-field-item ">
                <input
                  className="radio-label"
                  {...register("type")}
                  type="radio"
                  value="hoodies"
                  id="type-hoodie"
                />
                Hoodies
              </label>
              <label className="radio-field-item ">
                <input
                  className="radio-label"
                  {...register("type")}
                  type="radio"
                  value="jackets"
                  id="size-jackets"
                />
                Jackets
              </label>
              <label className="radio-field-item ">
                <input
                  className="radio-label"
                  {...register("type")}
                  type="radio"
                  value="shoes"
                  id="type-shoes"
                />
                Shoes
              </label>
              <label className="radio-field-item ">
                <input
                  className="radio-label"
                  {...register("type")}
                  type="radio"
                  value="accessories"
                  id="type-accessories"
                />
                Accessories
              </label>
            </div>

            <div className="upload_semi-title ">Media Attachments</div>

            <div className="form-fields size-radio-buttons">
              <label className="form-labels">File Upload</label>
              <input {...register("file")} type="file" id="file-upload" />
            </div>

            <input className="submit-button " type="submit" />
          </form>
          <div className="footer">color</div>
        </div>
      </div>
    </div>
  );
};
export default Upload;
