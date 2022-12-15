import React from "react";
import MainForm from "../components/MainForm/MainForm.jsx";
import './App.css'

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <h1>Gender app</h1>
                <MainForm/>
                <p>resolve: </p>
            </div>
        )
    }
}

export default App
