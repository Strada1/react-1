import React from "react";
import Card from "./card";
import { formatDay } from "../../../js/converDay";
import { converHours } from "../../../js/converHours";


export default function Forecast({ namecity, className, future}) {
  return (
    <div className={`left__block-top ${className}`}>
      <h1>{namecity}</h1>
     
      <div>{}</div>
    </div>
  );
}
