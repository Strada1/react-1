import React from 'react';
import './Tabs.sass';

function Tabs(props) {
  const { onChangeTabs, activeTab } = props;
  let classNameTab1 = 'tabs-triggers__item';
  let classNamesTab2 = 'tabs-triggers__item';
  let classNamesTab3 = 'tabs-triggers__item';
  switch (activeTab) {
    case 'tab-1':
      classNameTab1 += ' tabs-triggers__item_active';
      break;
    case 'tab-2':
      classNamesTab2 += ' tabs-triggers__item_active';
      break;
    case 'tab-3':
      classNamesTab3 += ' tabs-triggers__item_active';
      break;
  }

  return (
    <div className='tabs'>
      <div className='tabs-triggers'>
        <button
          type='button'
          onClick={onChangeTabs}
          id='tab-1'
          className={classNameTab1}
        >
          Now
        </button>
        <button
          type='button'
          onClick={onChangeTabs}
          id='tab-2'
          className={classNamesTab2}
        >
          Details
        </button>
        <button
          type='button'
          onClick={onChangeTabs}
          id='tab-3'
          className={classNamesTab3}
        >
          Forecast
        </button>
      </div>
    </div>
  );
}

export default Tabs;
