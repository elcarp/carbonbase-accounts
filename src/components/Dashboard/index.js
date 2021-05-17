import React from 'react'
import Sidebar from './sidebar'
import Main from './main'

export default function Dashboard() {
	return (
		<>
			<div className='dashboard-page w-full h-screen bg-chalet-green-100'>
				<Sidebar />
				<Main />
			</div>
		</>
	)
}
