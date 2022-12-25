let taskList = [];

export function addTask(task, priority = "high", progress = "to do") {
  taskList.push({ task, priority, progress });

  console.log(taskList);
}


export default taskList;
