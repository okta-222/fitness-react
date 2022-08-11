import React from 'react'
import "./footer.scss"
import img1 from "../../../shared/assets/images/logo-dark.svg"

export default function footer() {
  return (
    <div className='footer'>
        <div className="container">
            <div className="box bx borde">
                <i className="fa-solid fa-basketball"></i>
                <div className="info">
                  <h4 className='main-titlee'>Lifestyle</h4>
                  <h4>Pricing</h4>
                  <h4>Class</h4>
                  <h4>Features</h4>
                  <h4>Download</h4>
                </div>
            </div>

            <div className="box bo borde">
              <h4 className='main-titlee'>CONTACT</h4>
              <h4>43252 Borer<br/> Mountains</h4>
              <h4>Zackerychester</h4>
              <h4>Bahamas</h4>
              <h4>732-528-4945</h4>
            </div>

            <div className="box butt">
              <h4 className='main-titlee'>NEWSLETTER</h4>
              <h4>Subscribe our newsletter to get<br/>
               more free design course and<br/> resource.</h4>
               <form action="">
                    <input type="email" placeholder="Enter Your Email" />
                    <button type="submit" value="Subscribe" ><i className="fa-solid fa-arrow-right hi"></i></button>
              </form>
            </div>
        </div>


        <footer>
          <div className="container">
          <h5>Copyright © 2021 UI8 LLC. All rights reserved</h5>
          <div className="info">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-solid fa-basketball"></i>
              <i className="fa-brands fa-behance"></i>
          </div>
          </div>
        </footer>
    </div>
  )
}
