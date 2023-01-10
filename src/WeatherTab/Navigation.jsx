import React from "react";

function Navigation() {
  return (
    <nav className="tabs-items">
      <a href="#tab-01" className="tabs-item tabs-item-1">
        Now
      </a>
      <a href="#tab-02" className="tabs-item tabs-item-2">
        Details
      </a>
      <a href="#tab-03" className="tabs-item tabs-item-3">
        Forecast
      </a>
    </nav>
  );
}

export { Navigation };
