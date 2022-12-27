import React from 'react'
import PropTypes from 'prop-types'
import AddTask from '../AddTask/AddTask'
import TaskList from '../TaskList/TaskList'

import './styleBlockWithTask.css'

function BlockWithTask(props) {
  const { priorityText } = props
  const { massive } = props
  const { changeStatus } = props
  const { addTask } = props
  const { priorityForObj } = props
  const { idGenForThis } = props
  const { deleteTask } = props
  return (
    <div className="block-main">
      <h1 className="priorityHeader">{priorityText}</h1>
      <AddTask
        idGenForThis={idGenForThis}
        addTask={addTask}
        priorityForObj={priorityForObj}
        massive={massive}
      />
      <TaskList
        massive={massive}
        changeStatus={changeStatus}
        deleteTask={deleteTask}
      />
    </div>
  )
}

BlockWithTask.propTypes = {
  priorityText: PropTypes.string.isRequired,
  massive: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  changeStatus: PropTypes.func.isRequired,
  addTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  idGenForThis: PropTypes.func.isRequired,
  priorityForObj: PropTypes.string.isRequired,
}

export default BlockWithTask
