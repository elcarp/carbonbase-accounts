import './App.css'
import 'react-tabs/style/react-tabs.css'
import { BrowserRouter as Router } from 'react-router-dom'
import Navigation from './layout/navigation'
import Main from './layout/main'
import Login from './layout/login.js'
import React, { useState } from 'react'
import useToken from './hooks/useToken'

function setToken(userToken) {
	sessionStorage.setItem('token', JSON.stringify(userToken))
}

function getToken() {
	const tokenString = sessionStorage.getItem('token')
	const userToken = JSON.parse(tokenString)
	return userToken?.token
}

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
