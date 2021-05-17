import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
// import Dashboard from '../components/dashboard'
// import Preferences from '../components/preferences'

function Main(token) {
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
					<Route path='/main'>
						Hi Lise! You currently have 1,000 Carbonbase points and have offset
						0 tons of CO₂
					</Route>
					<Route path='/earn'>Earn more points</Route>
				</Switch>
			</div>
		</>
	)
}

export default Main
