import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './styleAddTask.css'

function AddTask(props) {
  const { addTask } = props
  const { idGenForThis } = props
  const [text, setText] = useState('')
  const { priorityForObj } = props
  return (
    <div className="block-add-task">
      <input
        value={text}
        onChange={(event) => {
          setText(event.target.value)
        }}
        className="input-name-task"
        placeholder="Enter a task"
      />
      <button
        className="btn-add-task"
        type="button"
        onClick={() => {
          const newId = idGenForThis()
          addTask({
            text,
            status: 'notCompleted',
            priority: priorityForObj,
            id: newId,
          })
          setText('')
        }}
      >
        +
      </button>
    </div>
  )
}

AddTask.propTypes = {
  addTask: PropTypes.func.isRequired,
  idGenForThis: PropTypes.func.isRequired,
  priorityForObj: PropTypes.string.isRequired,
}

export default AddTask
