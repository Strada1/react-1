import { STORAGE_KEY } from './constants';
export function addTaskToStorage(taskText, taskPriority) {
  const arrayList = getTasksFromStorage() || new Array();
  const task = {
    id: Math.floor(Math.random() * 1000),
    text: taskText,
    priority: taskPriority,
    isDone: false
  };
  arrayList.push(task);
  localStorage.setItem('list', JSON.stringify(arrayList));
}

export function removeTaskFromStorage(id) {
  const arrayList = getTasksFromStorage();
  const filteredList = arrayList.filter((item) => {
    if (item.id !== id) {
      return item;
    }
  });
  localStorage.setItem(STORAGE_KEY.LIST, JSON.stringify(filteredList));
}

export function getTasksFilteredByPriority(priority) {
  const listParced = getTasksFromStorage();
  const listFiltered = listParced.filter((item) => {
    if (item.priority === priority) {
      return item;
    }
  });
  return listFiltered;
}

export function getTasksFromStorage() {
  const listString = localStorage.getItem(STORAGE_KEY.LIST);
  const listParced = JSON.parse(listString);
  return listParced;
}
