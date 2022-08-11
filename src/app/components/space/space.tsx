import React from 'react' 
import "./space.scss"
import img1 from "../../../shared/assets/images/hand-grip-circle.png"
import img2 from "../../../shared/assets/images/gloves-circle.png"
import img3 from "../../../shared/assets/images/bottle-circle.png"
import data from "./data";
import SpaceCard from "../../designe-system/components/spaceCard/spaceCard";

export default function Space() {
  return (
    <div className="space">
            <h2>For any space, at any pace</h2>
            <p>From the comfort of your living room to a hotel room 
                across the globe, we put the best classes at your<br/>
             fingertips. No WiFi? Download videos offline for a practice that moves with you.</p>
             <div className="container">
             {data.map((property) => (
                <SpaceCard key={property.id} property={property} />
                ))}
        </div>
    </div>
  )
}
