import React from "react";
import "../Tabs/Tabs.css";

function Tabs({ active, setActive }) {
  let arr = [];

  return (
    <div className="weather__links">
      {active.map((item, index) => {
        return (
          <a
            href=""
            className={`weather__link ${item.active ? "active" : ""} `}
            data-id={item.title}
            key={index}
            onClick={(e) => {
              e.preventDefault();
              arr = [...active];

              active.map((element) => {
                element.active = false;
                item.active = !false;
              });

              setActive(arr);
              console.log(active);
            }}
          >
            {item.title}
          </a>
        );
      })}
    </div>
  );
}
export default Tabs;
