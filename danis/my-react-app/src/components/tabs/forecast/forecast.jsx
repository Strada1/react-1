import React from "react";
import Card from "./card";


export default function Forecast({namecity, className, future}) {


  return (
    <div className={`left__block-top ${className}`}>
      <h1>{namecity}</h1>
      <Card future={future}/>
      <div>
        {}
      </div>
    </div>
  );
}
