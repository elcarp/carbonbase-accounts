import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Dashboard from '../components/dashboard'
import Preferences from '../components/preferences'

function Main() {

	return (
		<>
			<div className='wrapper'>
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
