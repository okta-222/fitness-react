import React from "react";
import ball from "../../../shared/assets/images/book-pic.png";
import ballBlack from "../../../shared/assets/images/ball-green.png";
import bottle from "../../../shared/assets/images/ball.png";
import dumbbells from "../../../shared/assets/images/dumbbells.png";
import data from "./data";
import BookCard from "../../designe-system/components/bookCard/bookCard";

import "./books.scss";
export default function Book() { 
  return (
    <div className="book">
      <div className="container">
        <div className="content-img">
          <img className="img22" src={ball} alt="" />
          <img className="img44" src={ballBlack} alt="" />
          <img className="img66" src={bottle} alt="" />
          <img className="img88" src={dumbbells} alt="" />
        </div>
        {/*  */}
        <div className="content-txt">
          <div className="main-text">
            <h2>Book a class</h2>
            <p>
              Track your workouts, get better results, and
              <br />
              be the best version of you. Less thinking,
              <br /> more lifting.
            </p>
          </div>




          <div className="body-text">
          {data.map((property) => (
              <BookCard key={property.id} property={property} />
            ))}
          </div>





          <div className="end-text">
            <span className="span-1">10% Discount </span>
            if you’re already using the
            <span className="span-2"> Fitness Pro </span>
            <br />
            on App Store
          </div>
          <button className="btn">
            Book a class <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
