import React from 'react'
import Sidebar from './sidebar'
import Main from './main'
import { BrowserRouter as Router } from 'react-router-dom'

export default function Dashboard() {
	return (
		<>
			<div className='dashboard-page w-full h-screen bg-chalet-green-100 flex'>
				<Router>
					<Sidebar />
					<Main />
				</Router>
			</div>
		</>
	)
}
