export function examination(task, toDoList) {
  const index = toDoList.findIndex((item) => item.name === task);
  return index;
}
