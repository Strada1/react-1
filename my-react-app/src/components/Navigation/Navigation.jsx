import { NavLink } from "../NavLink/NavLink";
import NavigationCss from './Navigation.module.css'

const Navigation = ({ changeTab, tab }) => {
  const navLinks = [
    { tabIndex: 1, name: "Now" },
    { tabIndex: 2, name: "Details" },
    { tabIndex: 3, name: "Forecast" },
  ];
  return (
    <nav className={NavigationCss.tabsItems}>
      {navLinks.map(({name, tabIndex}) => (
        <NavLink

          tabName={name}
          className={tab === tabIndex ? NavigationCss.tabsItemActive : NavigationCss.tabsItem }
          changeTab={changeTab}
          tabIndex={tabIndex}
          key = {tabIndex}
        />
      ))}
    </nav>
  );
};

export { Navigation };
