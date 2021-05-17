import React, { FunctionComponent } from 'react'
import { FaLeaf } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const SideBar: FunctionComponent = () => {
	return (
		<>
			<div className='sidebar w-1/4 bg-chalet-green h-screen'>
				<ul className='pl-3'>
					<li>
						<h1 className='text-white font-bold text-3xl py-10 pb-4 flex'>
							Carbonbase <FaLeaf className='pl-4' />
						</h1>
					</li>
					<li>
						<Link className='text-white no-underline my-2 block' to='/'>
							Offset
						</Link>
					</li>
					<li>
						<Link className='text-white no-underline my-2 block' to='/'>
							Redeem
						</Link>
					</li>
                    <li>
						<Link className='text-white no-underline my-2 block' to='/'>
							Learn
						</Link>
					</li>
				</ul>
			</div>
		</>
	)
}

export default SideBar
