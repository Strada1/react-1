export const tasksName = 'tasks';

export function updateLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
