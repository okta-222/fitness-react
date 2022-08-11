import React from 'react'
import "./result.scss"
import img1 from "../../../shared/assets/images/user-green.svg"
import img2 from "../../../shared/assets/images/electrical-plug.svg"
import img3 from "../../../shared/assets/images/flag.svg"
import img4 from "../../../shared/assets/images/facebook.svg"
import data from "./data";
import ResultCard from "../../designe-system/components/resultCard/resultCard";

export default function Result() {
  return (
    <div className="result">
        <div className="container">
            {data.map((property) => (
                <ResultCard key={property.id} property={property} />
                ))}



        </div>
    </div>
  )
}
