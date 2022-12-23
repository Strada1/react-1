import React from 'react'
import PropTypes from 'prop-types'

function Task(props) {
  const task = props.task
  return (
    <li className={`${task.priority} ${task.progress}`}>
      { task.name }
    </li>
  )
}

Task.propTypes = {
  task: PropTypes.object
}

export default Task