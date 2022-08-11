import React from 'react'
import img from "../../../shared/assets/images/about-pic.png"
import "./video.scss"
import data from "./data";
import VideoCard from "../../designe-system/components/videoCard/videoCard";

export default function video() {
  return (
    <div className='video'>
        <div className="container">
            <aside>
                <h4>FITNESS PRO</h4>
                <div className="info">
                <h2>Simple, powerful,<br/>easy-to-use</h2>
                <p>Track your workouts, get better results, and be the best<br/>
                    version of you. Less thinking, more lifting.
                </p>
                </div>
            </aside> 


                <div className="body-content">
                        <div className="boxes">
                        {data.map((property) => (
                            <VideoCard key={property.id} property={property} />
                            ))}
                        </div>
                        <div className="pic">
                            <img src={img} alt="img" />
                        </div>
                </div>



















        </div>
    </div>
  )
}
