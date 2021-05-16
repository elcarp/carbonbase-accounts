import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Dashboard from '../components/Dashboard'
import Preferences from '../components/Preferences'
import Login from './login'

function Main() {
	return (
		<>
			<div className='App'>
				<Switch>
					<Route path='/dashboard'>
						<Dashboard />
					</Route>
					<Route path='/preferences'>
						<Preferences />
					</Route>
				</Switch>
			</div>
		</>
	)
}

export default Main
