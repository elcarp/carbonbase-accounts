import React, { FunctionComponent } from 'react'

const BrandAdmin: FunctionComponent = () => {
	return (
		<>
			<div className='brand-section h-screen bg-chalet-green-600 flex justify-center items-center text-white'>
				<div className='content text-center'>
					<h1>Brand Admin</h1>
					<button className='clear block mx-auto my-10'>
						Award <strong>user</strong> 50 points
					</button>
					<button className='clear block mx-auto my-10'>
						Redeem 50 points from <strong>user</strong>{' '}
					</button>
				</div>
			</div>
		</>
	)
}

export default BrandAdmin
