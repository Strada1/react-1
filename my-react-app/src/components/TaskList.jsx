import { Task } from './task';

function List({ taskContainerClass, isListHigh, taskList, setTask }) {
    const filterPriority = (array, priority) =>
        array.filter((item) => item.priority === priority);
    return (
        <div className={taskContainerClass}>
            {isListHigh
                ? filterPriority(taskList, 'high').map((task) => (
                      <Task
                          contentTask={task.task}
                          key={Math.random()}
                          task={taskList}
                          setTask={setTask}
                      />
                  ))
                : filterPriority(taskList, 'low').map((task) => (
                      <Task
                          contentTask={task.task}
                          key={Math.random()}
                          task={taskList}
                          setTask={setTask}
                      />
                  ))}
        </div>
    );
}

export { List };
