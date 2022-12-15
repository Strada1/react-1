import './App.css'

function App() {
    function formatName(name) {
        return name;
    }

    function getGreeting(user) {
        if (user) {
            return <h1>Здравствуй, {formatName(user)}!</h1>;
        }
        return <h1>Здравствуй, незнакомец.</h1>;
    }

    return (
        <div className="App">
            <h1>{getGreeting("")}</h1>
        </div>
    )
}

export default App
