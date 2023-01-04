import React from "react";


export default function Forecast({ namecity, className, future}) {
  console.log(future);
  return (
    <div className={`left__block-top ${className}`}>
      <h1>{namecity}</h1>
     
      <div>{}</div>
    </div>
  );
}
