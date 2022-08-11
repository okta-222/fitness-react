import React from 'react'
import "./header.scss";
import { useState } from "react";
import watch from "../../../shared/assets/images/watch.png";
import ball from "../../../shared/assets/images/ball.png";
import ballBlack from "../../../shared/assets/images/ball-black.png";
import bottle from "../../../shared/assets/images/bottle.png";





export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header>
    <div className="container">
                <div className="Navbar">
                      <span className="nav-logo">
                        <span className="span1"><i className="fa-solid fa-basketball"></i> Fitness Pro</span>
                      </span>
                      <div className={`nav-items ${isOpen && "open"}`}>
                        <button className="btn btn-1">Get free trail</button>
                      </div>
                      <div
                        className={`nav-toggle ${isOpen && "open"}`}
                        onClick={() => setIsOpen(!isOpen)}
                      >
                        <div className="bar"></div>
                    </div>
              </div>

                <main>
                  <div className="container">
                    <div className="content-txt">
                          <h4>TRAIN SMARTER. GET STRONGER</h4>
                          <h2>Simple fitness<br/> experience for <br/>everyone</h2>

                          <p>Track your workouts, get better results, and be the <br/>
                          bestversion of you. Less thinking, more lifting.
                            </p>
                      <div className="button-header">
                            <button className="btn butt1">Download App</button>
                            <button className="btn butt2">Book a Class</button>
                      </div>
                          
                    </div>
                    
                    <div className="content-img">
                      <img className='img1' src={watch} alt="" />
                      <img className='img2' src={ball} alt="" />
                      <img className='img3' src={ballBlack} alt="" />
                      <img className='img4' src={bottle} alt="" />
                      </div>

                  </div>
                </main>


    </div>
  </header>
  )
}
