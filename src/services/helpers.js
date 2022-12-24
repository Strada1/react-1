import { TASK_STATUS } from './const';

export function getFilteredArray(array, priority) {
  const FilteredPriority = array.filter(
    (taskData) => taskData.priority === priority
  );
  const tasksProgress = FilteredPriority.filter(
    (task) => task.status === TASK_STATUS.IN_PROGRESS
  );
  const taskDone = FilteredPriority.filter(
    (task) => task.status === TASK_STATUS.DONE
  );

  return [...tasksProgress, ...taskDone];
}
