const NavLink = ({tabName, className, changeTab, tabIndex}) => {

  return (
    <a href='#' className={className} onClick = {(e)=> {e.preventDefault();
    changeTab(tabIndex);}}>
      {tabName}
    </a>
  );
};

export {NavLink}