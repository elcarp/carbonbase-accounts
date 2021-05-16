import React, { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'

const SideBar: FunctionComponent = () => {
	return (
		<>
			<div className='sidebar w-1/4 bg-chalet-green h-screen'>
            <ul>
					{/* <li className='logo'>
						<a href='/'><img src={Burger} alt='logo'/></a>
					</li> */}
					<li>
						<Link className='text-white no-underline' to='/dashboard'>Dashboard</Link>
					</li>
					<li>
						<Link className='text-white no-underline' to='/preferences'>Preferences</Link>
					</li>
				</ul>
            </div>
		</>
	)
}

export default SideBar
