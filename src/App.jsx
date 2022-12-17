import './App.css';

import userImg from './assets/user.png';

import Main from './components/Main';

function App() {
	return (
		<div className="App">
			<div className="form-wrap">
				<div className="profile">
					<img src={userImg} alt="User" />
				</div>
				<div className="container">
					<Main />
				</div>
			</div>
		</div>
	);
}

export default App;
