import { useFormik } from "formik";
import React, { useContext, useRef } from "react";
import { ReviewPic } from "../../context/context";
import { Button } from "../Button/Button";
import { ErrorssMsg } from "../ErrorsMsg/ErrorssMsg";
import Modal from "../Modal/Modal";
import { Thankyou } from "../Thankyou/Thankyou";
import { HiddenFile } from "./HiddenFile";
import "./Story.css";

const initialValues = {
  pic: "",
  firstname: "",
  lastname: "",
  reviewText: "",
  option: "",
  institute: "",
};

export const Story = ({ handleFormSubmit = () => {} }) => {
  const refElement = useRef();

  const handleSelectImage = (e) => {
    const fileReader = new FileReader();

    fileReader.onload = () => {
      setFieldValue("pic", {
        file: fileReader.result,
      });
    };
    fileReader.readAsDataURL(e.target.files[0]);
  };

  const validateInput = (values) => {
    const errors = {};

    if (!values.pic) errors.pic = "Required";
    if (!values.firstname) errors.firstname = "Required";
    if (!values.lastname) errors.lastname = "Required";
    if (!values.reviewText) errors.reviewText = "Required";
    if (!values.option) errors.option = "Required";
    if (!values.institute) errors.institute = "Required";
    return errors;
  };

  const {
    values,
    touched,
    errors,
    resetForm,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues,
    validate: (values) => validateInput(values),
    onSubmit: (values) => {
      handleFormSubmit(values);
      resetForm(values);
    },
  });

  return (
    <div className="story">
      <h1>Share your amazing story!</h1>
      <form onSubmit={handleSubmit}>
        <div
          className="upload-div d-flex flex-column mt-4"
          onClick={() => refElement.current.click()}
        >
          <label>Upload your picture</label>
          <div className="choose-image">
            {values.pic ? "image" : "Choose Image"}
          </div>
          <i className="bi bi-paperclip clip"></i>
        </div>
        <HiddenFile
          refElement={refElement}
          name="pic"
          onChange={handleSelectImage}
        />
        <div className="row details mt-4">
          <div className="col-md-6">
            <label>First Name</label>
            <input
              type="text"
              className="form-control"
              name="firstname"
              value={values.name}
              onChange={handleChange}
            />
            {errors.firstname && touched.firstname ? (
              <ErrorssMsg errorText={errors.firstname} />
            ) : (
              ""
            )}
          </div>
          <div className="col-md-6">
            <label>Last Name</label>
            <input
              type="text"
              className="form-control"
              name="lastname"
              values={values.name}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="textarea mt-4">
          <label> Share your story</label>
          <textarea
            className="form-control"
            rows="4"
            name="reviewText"
            value={values.name}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="options d-flex align-items-center mt-4">
          <div className="mr-2">What did you interact with Vasiti as?</div> {" "}
          <div className="mr-2">
            <input
              type="radio"
              name="option"
              className="customer mr-2"
              value="customer"
              onChange={handleChange}
            />
            <label htmlFor="customer" className="mb-0">
              Customer
            </label>
          </div>
          <div>
            <input
              type="radio"
              name="option"
              className="vendor mr-2"
              value="vendor"
              onChange={handleChange}
            />
            <label htmlFor="vendor" className="mb-0">
              Vendor
            </label>
          </div>
        </div>
        <div className="details mt-4">
          <label>City or Higher Institution (for Students)</label>
          <input
            type="text"
            className="form-control"
            name="institute"
            value={values.name}
            onChange={handleChange}
          />
        </div>
        <div className="story-btn-div pl-0 d-flex justify-content-end mt-4">
          <Button
            label="Share your story!"
            className="story-btn"
            type="submit"
          />
        </div>
      </form>
    </div>
  );
};
