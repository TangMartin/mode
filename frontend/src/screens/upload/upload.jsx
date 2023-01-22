import React from "react";
import { useForm } from "react-hook-form";
import ProfileCard from "../../components/ProfileCard";

import SideNav from "../../components/SideNav";
import "./upload.css";

const Upload = () => {
  console.log("REGISTER ");
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

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
                  type="checkbox"
                  value="shirt"
                  id="type-small"
                />
                Shirt
              </label>

              <label className="radio-field-item ">
                <input
                  className="radio-label"
                  {...register("type")}
                  type="checkbox"
                  value="dress"
                  id="type-dress"
                />
                Dresses
              </label>
              <label className="radio-field-item ">
                <input
                  className="radio-label"
                  {...register("type")}
                  type="checkbox"
                  value="hoodies"
                  id="type-hoodie"
                />
                Hoodies
              </label>
              <label className="radio-field-item ">
                <input
                  className="radio-label"
                  {...register("type")}
                  type="checkbox"
                  value="jackets"
                  id="size-jackets"
                />
                Jackets
              </label>
              <label className="radio-field-item ">
                <input
                  className="radio-label"
                  {...register("type")}
                  type="checkbox"
                  value="shoes"
                  id="type-shoes"
                />
                Shoes
              </label>
              <label className="radio-field-item ">
                <input
                  className="radio-label"
                  {...register("type")}
                  type="checkbox"
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
