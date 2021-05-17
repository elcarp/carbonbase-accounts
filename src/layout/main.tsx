import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Dashboard from '../components/dashboard'
import Preferences from '../components/preferences'

function Main(token: any) {
	return (
		<>
			<div className='wrapper'>
				<Switch>
					<Route
						exact
						path='/'
						render={() => {
							return !token ? <Redirect to='/' /> : <Redirect to='/dashboard' />
						}}
					/>
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
