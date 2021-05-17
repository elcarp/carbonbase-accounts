import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

function Main(token) {
	return (
		<>
			<div className='container w-full pt-20 px-10'>
				<Switch>
					<Route
						exact
						path='/'
						render={() => {
							return !token ? <Redirect to='/' /> : <Redirect to='/dashboard' />
						}}
					/>
					<Route path='/main'>
						<div className='greeting text-center w-full'>
							Hi Lise! You currently have <strong>1,000</strong> Carbonbase
							points and have offset <strong>0</strong> tons of CO₂
						</div>
					</Route>
					<Route path='/earn'>
						Earn more points - Offset your carbon footprint. Check out some of
						these projects:
					</Route>
				</Switch>
			</div>
		</>
	)
}

export default Main
