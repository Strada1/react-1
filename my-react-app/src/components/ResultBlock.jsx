import React from 'react';

export function ResultBlock({
  changeStatus,
  level,
  allTasks,
  deleteTaskHandler,
}) {
  function changeColorOnCheckbox(e, taskName) {
    if (e.target.checked) {
      changeStatus(taskName, 'done');
    } else {
      changeStatus(taskName, 'to do');
    }
    return;
  }

  function filterPriority(filtration, arr) {
    const filtrationTasks = arr.filter((item) => item.PRIORITY === filtration);
    return filtrationTasks;
  }

  return (
    <div className="high-block unique_block-add">
      {filterPriority(level, allTasks)
        .reverse()
        .map((item) => {
          return (
            <div
              key={item.id}
              className={item.status === 'to do' ? 'new-task' : 'new-task add'}
            >
              <label className="connect">
                <input
                  type="checkbox"
                  className="check-box"
                  checked={item.status === 'to do' ? false : 'checked'}
                  onChange={(e) => changeColorOnCheckbox(e, item.name)}
                />

                <span className="check-style"></span>
                <div className="task-text">{item.name}</div>
              </label>
              <button
                onClick={() => deleteTaskHandler(item.id)}
                className="task-close"
              >
                <img src="images/close.svg" />
              </button>
            </div>
          );
        })}
    </div>
  );
}
