import React from 'react';
import "./banner.scss";
import img2 from "../../../shared/assets/images/logo2.png";
import img3 from "../../../shared/assets/images/logo3.png";
import img4 from "../../../shared/assets/images/logo4.png";
import img6 from "../../../shared/assets/images/logo6.png";
import img7 from "../../../shared/assets/images/logo7.webp";
import img8 from "../../../shared/assets/images/logo8.webp";


export default function about() {
  return (
    <main className="Banner">
      <div className="container">
        <h3 className="text">Trusted by more than 2M users worldwide</h3>
        <div className="png">
              <img src={img7} alt="img" />
              <img src={img2} alt="img" />
              <img src={img3} alt="img" />
              <img src={img4} alt="img" />
              <img src={img8} alt="img" />
              <img src={img6} alt="img" />
        </div>
      </div>
    </main> 
  )
}
