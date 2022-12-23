import { Task } from './task';

function List(props) {
    const { taskContainerClass, isListHigh } = props;
    if (isListHigh) {
        return (
            <div className={taskContainerClass}>
                <Task contentTask="сверстать этот ту ду" />
                <Task contentTask="А где рендер задач???" />
            </div>
        );
    }
    return (
        <div className={taskContainerClass}>
            <Task contentTask="А это таски в лоу" />
            <Task contentTask="работает?" />
        </div>
    );
}

export { List };
