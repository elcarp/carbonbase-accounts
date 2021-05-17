import './App.css'
import 'react-tabs/style/react-tabs.css'
import { BrowserRouter as Router } from 'react-router-dom'
import Navigation from './layout/navigation'
import Main from './layout/main'
import Login from './layout/login.js'
import React from 'react'
import useToken from './hooks/useToken'

function App() {
	const { token, setToken } = useToken()

	if (!token) {
		return <Login setToken={setToken} />
	}

	return (
		<>
			<Router>
				<Navigation />
				<Main />
			</Router>
		</>
	)
}

export default App
