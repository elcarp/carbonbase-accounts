import './App.css'
import 'react-tabs/style/react-tabs.css'
import { BrowserRouter as Router } from 'react-router-dom'
import Main from './layout/main'
import Login from './layout/login'
import React, { useState } from 'react'

function App() {
	const [token, setToken] = useState()
	console.log('token?')

	if (!token) {
		return <Login setToken={setToken} />
	}

	return (
		<>
			<Router>
				{/* <Navigation /> */}
				<Main />
			</Router>
			{/* <Login /> */}
		</>
	)
}

export default App
