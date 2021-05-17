import React from 'react'
import { Route, Switch } from 'react-router-dom'
// import Dashboard from '../components/dashboard'
// import Preferences from '../components/preferences'

function Main() {

	return (
		<>
			<div className='wrapper'>
				<Switch>
					<Route path='/dashboard'>
						{/* <Dashboard /> */} Initial content
					</Route>
					<Route path='/preferences'>
						{/* <Preferences /> */} Something else
					</Route>
				</Switch>
			</div>
		</>
	)
}

export default Main
