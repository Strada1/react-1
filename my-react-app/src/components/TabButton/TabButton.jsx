import './TabButton.css';

const TabButton = ({ tabName, style, handleClick }) => {
  return (
  <button
      className={style}
      onClick={handleClick}
    >
    {tabName}
  </button>);
};
export default TabButton;
