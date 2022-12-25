import React from 'react'
import './styles/App.css'
import { ToDo } from './Components/ToDo'

class App extends React.Component {
    render() {
        return (
            <div>
                <ToDo />
            </div>
        )
    }
}

export default App
