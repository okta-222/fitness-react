import React from 'react'
import "./trainers.scss";
import data from "./data";
import TrainersCard from "../../designe-system/components/trainersCard/trainersCard";



export default function trainers() {
  return (
    <div className="trainers">
        <h2>Meet our pro trainers</h2>
        <p>From all over the world, we select and provide you a team of<br/>
            seasoned trainers. What's more, the 1-on-1 live practice mode helps<br/>
            you quickly get great results.
      </p>
      <div className="container">
                    <ul className="main-itiem">
                        <li className="active">Yoga</li>
                        <li>Fitness&Gym</li>
                        <li>Gymnastics</li>
                        <li>Running</li>
                    </ul>
                    <div className="boxes">
                            
                            {data.map((property) => (
                            <TrainersCard key={property.id} property={property} />
                            ))}

                    </div>
    </div>
    </div>
  )
}
