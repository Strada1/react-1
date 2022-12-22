import React from 'react';
export function TaskAddLevelPriority(props) {
  console.log();
  return (
    <div className={`task-add ${props.level}`}>
      <form>
        <input
          type="text"
          className={`${props.level}-input input-style`}
          placeholder="Добавить важных дел"
        />
        <button className={`task-plus ${props.level} unique_btn-add `}>
          <img src="images/plus.svg" alt="" className={`plus ${props.level}`} />
        </button>
      </form>
    </div>
  );
}
