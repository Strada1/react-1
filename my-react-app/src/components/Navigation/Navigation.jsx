import { NavLink } from "../NavLink/NavLink";
import './Navigation.css'

const Navigation = ({ changeTab, tab }) => {
  const navLinks = [
    { tabIndex: 1, name: "Now" },
    { tabIndex: 2, name: "Details" },
    { tabIndex: 3, name: "Forecast" },
  ];
  return (
    <nav className="tabs-items">
      {navLinks.map(({name, tabIndex}) => (
        <NavLink

          tabName={name}
          className={ `tabs-item  ${tab === tabIndex && "tabs-item-active "}`}
          changeTab={changeTab}
          tabIndex={tabIndex}
          key = {tabIndex}
        />
      ))}
    </nav>
  );
};

export { Navigation };
