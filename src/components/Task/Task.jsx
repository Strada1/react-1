import React from 'react'
import PropTypes from 'prop-types'
import './styleTask.css'

function Task(props) {
  const { data } = props
  const { changeStatus } = props
  const { deleteTask } = props
  return (
    <div className="task-block">
      <input
        className="task-block__btn_check"
        checked={data.status === 'completed'}
        type="checkbox"
        label={data.priority}
        onChange={() => {
          changeStatus(data.id)
        }}
      />
      <p className="task-block__text">{data.text}</p>
      <button
        className="task-block__btn_del"
        type="button"
        onClick={() => {
          deleteTask(data.id)
        }}
      >
        +
      </button>
    </div>
  )
}

Task.propTypes = {
  data: PropTypes.shape({
    text: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    priority: PropTypes.string.isRequired,
  }).isRequired,
  changeStatus: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
}

export default Task
