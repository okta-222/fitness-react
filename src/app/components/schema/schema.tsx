import React from 'react';
import "./schema.scss";
import data from "./data";
import SchemaCard from "../../designe-system/components/schemaCard/schemaCard";

export default function Schema() {
  return (
    <section className="section">
      <div className="container">
          <h2>How it works</h2>
          <h4 className="text">Stacks is a production-ready library of stackable<br/>
          content blocks built in React Native.</h4>

          <div className="box-icon">


            {data.map((property) => (
              <SchemaCard key={property.id} property={property} />
            ))}


          </div>
    </div>
  </section> 
  )
}
