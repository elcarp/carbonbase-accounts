import React, { useState } from 'react'
import { FaLeaf } from 'react-icons/fa'
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
// import BrandForm from '../components/brands'
// import IndividualForm from '../components/individuals'
import PropTypes from 'prop-types'

async function loginUser(credentials) {
	console.log('credentials here', credentials)

	return fetch('http://localhost:8080/login', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(credentials),
	}).then((data) => data.json())
}

async function createUser(credentials, username, password) {
	return fetch('http://localhost:3333/list', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(credentials, username, password),
	}).then((data) => data.json())
}
export default function Login({ setToken }, credentials) {
	const [username, setUserName] = useState()
	const [password, setPassword] = useState()
	const loginCredentials = {
		id: credentials,
		username: username,
		password: password,
		points: 100,
	}
	const handleSubmit = async (e) => {
		e.preventDefault()
		const token = await loginUser({
			username,
			password,
		})
		setToken(token)
		createUser(loginCredentials)
	}

	return (
		<>
			<div className='wrapper bg-chalet-green block md:flex items-center justify-center h-screen'>
				<div className='left-section bg-chalet-green-400 text-white h-screen w-full md:w-1/2  px-10 flex items-center justify-center'>
					<div className='content text-center'>
						<h1 className='pb-4'>Brands Login</h1>
						<p>
							Grow your brand by <br />
							rewarding sustainable lifestyles.
						</p>
						<button className='shadow-md mt-6 uppercase font-bold bg-chalet-green-600 px-5 py-2 rounded-lg uppercase hover:bg-chalet-green active:bg-chalet-green-100 focus:outline-none'>
							Sign up / Login
						</button>
					</div>
				</div>
				<div className='right-section bg-chalet-green-600 w-full md:w-1/2  px-10 h-screen flex items-center justify-center'>
					<div className='text-wrap text-center'>
						<h1 className='text-white font-bold text-5xl pb-4 flex justify-center'>
							Carbonbase <FaLeaf className='pl-4' />
						</h1>
						<p className='text-white mb-3'>Let's stop the climate clock.</p>
						<p className='text-white'>
							Find out your carbon footprint <br />
							for free in 2 minutes!
						</p>
						<div className='choose-login'>
							<form onSubmit={handleSubmit}>
								<div className='form-wrapper text-sm'>
									<input
										type='text'
										placeholder='Your Email'
										onChange={(e) => setUserName(e.target.value)}
										className='px-3 py-2 w-full mt-5 rounded-md focus:outline-none text-black'
									/>
									<input
										type='text'
										placeholder='Create a password (8 characters)'
										onChange={(e) => setPassword(e.target.value)}
										className='px-3 py-2 w-full mt-5 rounded-md focus:outline-none text-black'
									/>
									<button
										type='submit'
										className='shadow-md mt-6 uppercase font-bold bg-chalet-green-200 w-full text-lg px-5 py-2 rounded-lg uppercase hover:bg-chalet-green active:bg-chalet-green-100 focus:outline-none'>
										Create account
									</button>
								</div>
							</form>

							{/* <Tabs className='tabs-width'>
								<TabList>
									<Tab className='text-white cursor-pointer w-1/2 inline-block font-bold py-2 bg-chalet-green rounded-t-lg'>
										Individuals
									</Tab>
									<Tab className='text-white cursor-pointer w-1/2 inline-block font-bold py-2 bg-chalet-green rounded-t-lg'>
										Brands
									</Tab>
								</TabList>
								<TabPanel className='text-white'>
									<IndividualForm />
								</TabPanel>
								<TabPanel className='text-white'>
									<BrandForm />
								</TabPanel>
							</Tabs> */}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

Login.propTypes = {
	setToken: PropTypes.func.isRequired,
}
// function setToken(token) {
// 	throw new Error('Function not implemented.')
// }
