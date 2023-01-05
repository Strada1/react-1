import React, { useState } from 'react';

const items = [
  { title: 'Now', className: 'tab-item' },
  { title: 'Details', className: 'tab-item' },
  { title: 'Forecast', className: 'tab-item' },
];
export function ChooseSection() {
  const [active, setActive] = useState();
  const ChangeColorTabs = (e) => {
    setActive(+e.target.dataset.index);
  };

  return (
    <nav className="tabs__items" onClick={ChangeColorTabs}>
      {items.map((item, i) => {
        return (
          <a
            key={i}
            href={`#tab_${i + 1}`}
            data-index={i}
            className={`tab-item ${i === active ? 'active' : ''}`}
          >
            {item.title}
          </a>
        );
      })}
    </nav>
  );
}
