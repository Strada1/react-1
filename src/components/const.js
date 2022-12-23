

const STATUS = {
    DONE: 'Done',
    INPROGRESS: 'In progress',
    TODO: 'To_do',
}

const PRIORITY = {
    HEIGHT: 'height',
    LOW: 'low',
    MIDDLE: 'middle',
}

const taskList = [
    {
        progress: STATUS.TODO,
        name: 'learn',
        priority: PRIORITY.MIDDLE,
        id: Math.random(),
    },
    {
        progress: STATUS.DONE,
        name: 'jump',
        priority: PRIORITY.HEIGHT,
        id: Math.random(),
    },
    {
        progress: STATUS.DONE,
        name: 'swim',
        priority: PRIORITY.LOW,
        id: Math.random(),
    }
];

export function addTask(event) {
    event.preventDefault();

    taskList.push({
        progress: STATUS.TODO,
        name: event.target[0].value,
        priority: event.target[1].value,
        id: Math.random(),
    })
    alert(`задача: ${event.target[0].value} - добавлена`);
}

export default taskList