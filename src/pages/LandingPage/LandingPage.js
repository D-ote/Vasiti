import React, { useContext, useEffect, useState } from "react";
import { About, Bag, Ellipse, Pic, Smiling, Underline } from "../../assets";
import { Header } from "../../components/Header/Header";
import { SubHeader } from "../../components/SubHeader/SubHeader";
import Modal from "../../components/Modal/Modal";
import { Story } from "../../components/Story/Story";
import { Review } from "../../components/Review/Review";
import { TopFooter } from "../../components/TopFooter/TopFooter";
import { BottomFooter } from "../../components/BottomFooter/BottomFooter";
import "./LandingPage.css";
import { ReviewContext } from "../../context/context";
import { Thankyou } from "../../components/Thankyou/Thankyou";

export const LandingPage = () => {
  // let people = [
  //   { name: "Alice", age: 21 },
  //   { name: "Max", age: 20 },
  //   { name: "Jane", age: 20 },
  // ];
  // const tray = (myArray, property) => {
  //   return myArray.reduce((prev, curr) => {
  //     let key = curr[property];
  //     if (!prev[key]) {
  //       prev[key] = [];
  //     }
  //     prev[key].push(curr);
  //     return prev;
  //   }, {});
  // };

  // let grouped = tray(people, "age");
  // console.log(grouped);

  const [gotReview, setGotReview] = useState([]);
  const story = useContext(ReviewContext);

  console.log(story.review, "story");

  const handleFormSubmit = (values) => {
    story.setReview([...story.review, values]);
    window.$("#exampleModal").modal("hide");
    window.$("#exampleModal form :input").val("");
    window.$("#yaay").modal("show");
  };

  const handleCloseModal = () => {
    window.$("#yaay").modal("hide");
  };

  useEffect(() => {
    story.setReview(JSON.parse(localStorage.getItem("review") || "[]"));
  }, []);

  useEffect(() => {
    if (story?.review?.length > 0) {
      localStorage.setItem("review", JSON.stringify(story.review));
    }
  }, [story.review]);

  useEffect(() => {
    setGotReview(JSON.parse(localStorage.getItem("review") || "[]"));
  }, [story.review]);

  console.log(gotReview, "gotgot");

  return (
    <div className="landing-page">
      <Header />
      <SubHeader />
      <div className="about d-flex align-items-center justify-content-between">
        <div className="about-intro">
          <h1>
            Amazing <br /> Experiences from Our Wonderful Customers
          </h1>
          <p>
            Here is what customers and vendors are saying about us, you can
            share your stories with us too.
          </p>
        </div>
        <div>
          <img src={About} alt="about" className="about-pic" />
        </div>
      </div>
      <div className="experience">
        <div className="experience-div d-flex align-items-center justify-content-between">
          <div>
            <img src={Smiling} alt="experience" />
          </div>
          <article className="experience-article">
            <h4>Tolu & Joy’s Experience</h4>
            <span className="badge experience-badge mb-4">CUSTOMER</span>
            <p>
              I had the best experience shopping with vasiti. Usability of the
              website was great, very good customer service, an all round great{" "}
              <br />
              experience. I would definately be coming back! I had the best
              experience shopping with vasiti. Usability of the website was
              great, very good customer service, an all round great <br />{" "}
              experience. I would definately be coming back!
            </p>
            <Modal content={<Story handleFormSubmit={handleFormSubmit} />}>
              <div className="share">
                <p className="mb-0 mt-5">SHARE YOUR OWN STORY!</p>
                <img src={Underline} alt="text underline" />
              </div>
            </Modal>
          </article>
        </div>
      </div>
      <div className="customer-reviews row">
        {gotReview &&
          gotReview?.map((item, i) => {
            return (
              <div className="col-md-4" key={i}>
                <Review
                  pic={item.pic.file}
                  name={`${item.firstname} ${item.lastname}`}
                  location={item.institute}
                  reviewer={item.option}
                  review={item.reviewText}
                />
              </div>
            );
          })}
      </div>
      <div className="vendor">
        <div className="vendor-div d-flex align-items-center justify-content-between">
          <article className="experience-article">
            <h4>Josiah’s Experience</h4>
            <span className="badge vendor-badge mb-4">VENDOR</span>
            <p>
              I had the best experience shopping with vasiti. Usability of the
              website was great, very good customer service, an all round great{" "}
              <br />
              experience. I would definately be coming back! I had the best
              experience shopping with vasiti. Usability of the website was
              great, very good customer service, an all round great <br />{" "}
              experience. I would definately be coming back!
            </p>
            <Modal content={<Story handleFormSubmit={handleFormSubmit} />}>
              <div className="share">
                <p className="mb-0 mt-5 vendor-share">SHARE YOUR OWN STORY!</p>
                <img src={Underline} alt="text underline" />
              </div>
            </Modal>
          </article>
          <div className="vendor-image">
            <img src={Ellipse} alt="ellipse" className="ellipse" />
            <img src={Bag} alt="shopping bag" className="bag" />
          </div>
        </div>
      </div>
      <div className="customer-reviews row">
        <div className="col-md-4">
          <Review
            pic={Pic}
            name="Joseph Ike"
            location="In Ikeja"
            reviewer="CUSTOMER"
            review="Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim."
          />
        </div>
        <div className="col-md-4">
          <Review
            pic={Pic}
            name="Joseph Ike"
            location="In Ikeja"
            reviewer="VENDOR"
            review="Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim."
          />
        </div>
        <div className="col-md-4">
          <Review
            pic={Pic}
            name="Joseph Ike"
            location="In Ikeja"
            reviewer="CUSTOMER"
            review="Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim."
          />
        </div>
      </div>
      <footer className="footer">
        <div className="footer-div">
          <TopFooter />
          <BottomFooter />
          <Modal
            id="yaay"
            content={<Thankyou onClick={handleCloseModal} />}
          ></Modal>
        </div>
      </footer>
    </div>
  );
};
