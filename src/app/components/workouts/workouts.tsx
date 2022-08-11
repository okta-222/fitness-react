import React from 'react'
import img from "../../../shared/assets/images/phones.png"
import "./workouts.scss"

export default function workouts() {
  return (
    <div className="workouts">
        <div className="container">
                <div className="boxes">
                            <div className="box">
                                <h2 className="one">All your workouts,<br/>in your pocket</h2>
                                <p>Fitness Pro helps track your<br/>
                                    workouts, get better results, and be<br/>
                                    the best version of you. Less<br/>
                                    thinking!
                                </p>
                                <div className="main-item">
                                    <span><i className="fa-solid fa-check"></i>Fitness Pro Cloud</span>
                                    <span><i className="fa-solid fa-check"></i>Syncs with Google Fit</span>
                                    <span><i className="fa-solid fa-check"></i>Syncs with Apple Health</span>
                                    <span><i className="fa-solid fa-check"></i>Track your progress easily</span>
                                    <span><i className="fa-solid fa-check"></i>Intuitive and clean design</span>
                                </div>
                                <div className="button-header">
                                    <button className="btn butt1">Choose Plan</button>
                                    <button className="btn butt2">Request a demo</button>
                                </div>
                            </div>
                            
                </div>



                <div className="pic">
                        <img src={img} alt="img" />
                </div>
        </div>
    </div>
  )
}
