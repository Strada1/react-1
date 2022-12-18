import React from 'react';
import ReactDOM from 'react-dom/client';
import { Main } from '/src/App/App';
import '/style/style.css';
import '/src/Main/main.css'

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Main />
	</React.StrictMode>
);
