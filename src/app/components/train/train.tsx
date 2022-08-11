import React from 'react'
import ball from "../../../shared/assets/images/bag.png";
import ballBlack from "../../../shared/assets/images/gloves.png";
import bottle from "../../../shared/assets/images/bottle-1.png";
import "./train.scss"

export default function Train() {
  return (
    <article className='train'>
      <div className="container">



              <main className="sec-train">
                <div className="container">
                  <div className="content-txt">
                          <h2>TRAIN SMARTER.<br/> GET STRONGER</h2>
                          <h4>Fitness Pro helps track your workouts,<br/> 
                            get better results, and be the best <br/>
                            version of you. Less thinking, more <br/>
                            lifting 🔥🏀</h4>
                          <button className='btn'>Start free trial</button>
                    </div>
                    <div className="content-img">
                      <img className='img1' src={ball} alt="" />
                      <img className='img3' src={ballBlack} alt="" />
                      <img className='img4' src={bottle} alt="" />
                    </div>
                    </div>
              </main>




      </div>
    </article>
  )
}
