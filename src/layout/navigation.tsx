import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
	return (
		<>
			<nav className='hidden'>
				<ul>
					<li>
						<Link to='/dashboard'>Dashboard</Link>
					</li>
					<li>
						<Link to='/preferences'>Preferences</Link>
					</li>
				</ul>
			</nav>
		</>
	)
}

export default Navigation
