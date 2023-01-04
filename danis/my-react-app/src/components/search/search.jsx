import React, {useState} from "react";
import './search.css'

export default function Search({getValue}) {
  const [nameCity, setnameCity] = useState('')

  function change(e) {
    setnameCity(e.target.value);
  } 
 
  function prevent(e) {
    e.preventDefault();
    getValue(nameCity);
  }

  return (
    <form onSubmit={prevent} action="">
      <input className="search" onChange={change} placeholder="Aktobe" type="text" />
    </form>
  );
}
