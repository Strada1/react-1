import './TabButton.css';

const TabButton = ({ tabName, style }) => {
  return <button className={style}>{tabName}</button>;
};
export default TabButton;
