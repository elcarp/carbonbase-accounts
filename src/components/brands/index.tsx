import React, { FunctionComponent } from 'react'

const BrandForm: FunctionComponent = () => {
	return (
		<>
			<div className='form-wrapper text-sm'>
				<input
					type='text'
					placeholder='Your Email'
					className='px-3 py-2 w-full mt-5 rounded-md focus:outline-none text-black'
				/>
				<input
					type='text'
					placeholder='Create a password (8 characters)'
					className='px-3 py-2 w-full mt-5 rounded-md focus:outline-none text-black'
				/>
				<button
					type='submit'
					className='shadow-md mt-6 uppercase font-bold bg-chalet-green-200 w-full text-lg px-5 py-2 rounded-lg uppercase hover:bg-chalet-green active:bg-chalet-green-100 focus:outline-none'>
					Login
				</button>
			</div>
		</>
	)
}

export default BrandForm
