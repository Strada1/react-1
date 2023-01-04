import React from "react";

export default function Card(props) {
const {future} = props
const data = future.map((city) => (
  
      <div className="date-forecast">{city.dt}</div>
     
));

  return (
    <div>
      <h1>{data}</h1>
     
    </div>
  );
}
