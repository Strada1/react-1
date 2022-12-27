import React from 'react'
import PropTypes from 'prop-types'
import Task from '../Task/Task'
import './styleTaskList.css'

function TaskList(props) {
  const { changeStatus } = props
  const { deleteTask } = props
  const { massive } = props
  const renderMassive = massive.map((obj) => (
    <Task
      changeStatus={changeStatus}
      deleteTask={deleteTask}
      data={obj}
      key={obj.id}
    />
  ))
  return <div className="task-list">{renderMassive}</div>
}

TaskList.propTypes = {
  massive: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  changeStatus: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
}

export default TaskList
