import React from 'react';
import './AddTask.css';
import { AddButton } from '../AddButon/AddButton';

class AddTask extends React.Component {
    render() {
        return (
        <div class="childContainer">
            <form >
            <input class="inputTask" type="text" placeholder="Add task..." />
            <AddButton />
            </form>
        </div>
        );
    }
}

export  { AddTask };