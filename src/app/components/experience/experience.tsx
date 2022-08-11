import React from 'react'
import "./experience.scss"
// import data from "./data";
// import ServtUs from "design-system/components/ServicesCard/ServiceCard";

export default function experience() { 
  return (
    
    <div className="experience">
      <p>NEW WORKOUTS ADDED EVERY WEEK</p>
      <h2>A new fitness experience <br/>for everyone</h2>
      <div className="container">
                <div className="box ox">
                <i className="fa-solid fa-dumbbell"></i>
                      <h3>Keep track of calories and<br/> macros</h3>
                      <p>Fitness Pro helps track your<br/>
                          workouts, get better results, and<br/>
                          be the best version of you. Less<br/> thinking!
                      </p>
                </div>
                {/*  */}
                <div className="box ox">
                <i className="fa-solid fa-bowling-ball"></i>
                      <h3>Keep track of calories and macros</h3>
                      <p>Fitness Pro helps track your<br/>
                          workouts, get better results, and<br/>
                          be the best version of you. Less<br/> thinking!
                      </p>
                </div>
                <div className="box">
                <i className="fa-solid fa-football"></i>
                      <h3>Keep track of calories and macros</h3>
                      <p>Fitness Pro helps track your<br/>
                          workouts, get better results, and<br/>
                          be the best version of you. Less<br/> thinking!
                      </p>
                </div>

      </div>
    </div>
  )
}
