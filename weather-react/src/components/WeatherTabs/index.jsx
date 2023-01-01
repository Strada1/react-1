import React from 'react';
import classes from './index.module.css';

const WeatherTabs = ({tabs, activeTab, changeTab}) => {
  return (
    <nav className={classes.tabsBar}>
      {tabs.map((tabItem) => {
        const isActive = tabItem.value === activeTab.value;
        const className = isActive
          ? `${classes.tab} ${classes.isActive}`
          : `${classes.tab}`;

        return (
          <a
            key={tabItem.value}
            className={className}
            onClick={(e) => {
              e.preventDefault();
              changeTab(tabItem);
            }}
          >
            {tabItem.title}
          </a>
        );
      })}
    </nav>
  );
};

export default WeatherTabs;
