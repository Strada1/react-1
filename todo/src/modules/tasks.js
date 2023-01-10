const listStatuses = {
  TODO: 'to do',
  DONE: 'done'
};

const listPriority = {
  HIGH: {
    value: 'high',
    title: 'Важные'
  },
  LOW: {
    value: 'low',
    title: 'Неважные'
  }
};

class Task {
  constructor (name, priority = listPriority.LOW.value) {
    this.name = name;
    this.status = listStatuses.TODO;
    this.priority = priority;
  }
}

class Tasks {
  static changeStatus(task) {
    task.status = task.status === listStatuses.TODO ? listStatuses.DONE : listStatuses.TODO;
  }

  static deleteTask(tasks, task) {
    return tasks.filter((taskItem) => taskItem.id !== task.id)
  }

  static updateTasks(tasks, task) {
    const newTasks = tasks.slice();
    const updatedTask = newTasks.find((taskItem) => taskItem.id = task.id);
    updatedTask.status = task.status;
    return newTasks;
  }

  static findTask(tasks, task) {
    return tasks.find((taskItem) => taskItem.name.toLowerCase() === task.name.trim().toLowerCase());
  }
}

export {
  listStatuses,
  listPriority,
  Task,
  Tasks
};
