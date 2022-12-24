const PRIORITY = {
  HIGH: "high",
  LOW: "low",
};


const tasks = [
  { name: "Вот вам и супер интересная тема", priority: PRIORITY.HIGH, isDone: false },
  { name: "Сверстать этот TODO list", priority: PRIORITY.HIGH, isDone: false },
  { name: "Начать делать задачу", priority: PRIORITY.HIGH, isDone: false },
  { name: "Посмотреть ютубчик", priority: PRIORITY.LOW, isDone: false },
  { name: "Практика React o_O", priority: PRIORITY.LOW, isDone: false },
];

export { tasks, PRIORITY };
