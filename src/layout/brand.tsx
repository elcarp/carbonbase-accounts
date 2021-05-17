import React, { FunctionComponent } from 'react'

const BrandAdmin: FunctionComponent = () => {
	return (
		<>
			<div className='brand-section h-screen bg-chalet-green-600 flex justify-center items-center text-white'>
				<div className='content text-center'>
					<h1>Brand Admin</h1>
					<button className='clear block mx-auto my-10 shadow-md mt-6 uppercase font-bold bg-chalet-green-200 w-full text-lg px-5 py-2 rounded-lg uppercase hover:bg-chalet-green active:bg-chalet-green-100 focus:outline-none'>
						Award <strong>user</strong> 50 points
					</button>
					<button className='clear block mx-auto my-10 shadow-md mt-6 uppercase font-bold bg-chalet-green-200 w-full text-lg px-5 py-2 rounded-lg uppercase hover:bg-chalet-green active:bg-chalet-green-100 focus:outline-none'>
						Redeem 50 points from <strong>user</strong>{' '}
					</button>
				</div>
			</div>
		</>
	)
}

export default BrandAdmin
