import React from 'react';
import './Tabs.sass';
import PropTypes from 'prop-types';

const tabs = [
  { tab: { name: 'Now', id: 'tab-1' } },
  { tab: { name: 'Details', id: 'tab-2' } },
  { tab: { name: 'Forecast', id: 'tab-3' } },
];

function Tabs(props) {
  const { onChangeTabs, activeTab } = props;
  const classNameTab = 'tabs-triggers__item';
  const classNameActiveTab = 'tabs-triggers__item tabs-triggers__item_active';

  const content = tabs.map(({ tab: { name, id } }) => (
    <button
      key={id}
      type='button'
      onClick={onChangeTabs}
      id={id}
      className={activeTab === id ? classNameActiveTab : classNameTab}
    >
      {name}
    </button>
  ));
  return (
    <div className='tabs'>
      <div className='tabs-triggers'>{content}</div>
    </div>
  );
}

Tabs.propTypes = {
  onChangeTabs: PropTypes.func.isRequired,
  activeTab: PropTypes.string.isRequired,
};

export default Tabs;
