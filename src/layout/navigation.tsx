import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
	return (
		<>
			<nav>
				<ul>
					{/* <li className='logo'>
						<a href='/'><img src={Burger} alt='logo'/></a>
					</li> */}
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
