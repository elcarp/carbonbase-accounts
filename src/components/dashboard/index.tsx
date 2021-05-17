import React, { useEffect, useState } from 'react'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'

const QRCode = require('qrcode.react')

export default function Dashboard() {
	const [users, setUsers] = useState<any>()

	function getUsers() {
		fetch('http://localhost:3333/list')
			.then((response) => response.json())
			.then((users) => {
				setUsers(users)
			})
		return users
	}
	useEffect(() => {
		getUsers()
	}, [])

	const currentUser = users[users.length -1]

	return (
		<>
			<div className='dashboard-page w-full h-screen bg-chalet-green-100'>
				<div className='greeting text-center w-full pt-20'>
					<div className='profile-pic w-10 h-10 flex justify-center mx-auto items-center bg-chalet-green-600 text-white font-bold rounded-full'>
						LC
					</div>
					<p className='py-10'>
						Hi <strong>{currentUser && currentUser.name}</strong>! You currently have <strong>{currentUser && currentUser.points}</strong> Carbonbase points
						and have offset <strong>0</strong> tons of CO₂
					</p>
				</div>

				<Tabs className='w-1/2 mx-auto'>
					<TabList>
						<Tab className='text-white cursor-pointer w-1/3 inline-block font-bold py-2 px-4 shadow-md bg-chalet-green rounded-t-lg'>
							Earn
						</Tab>
						<Tab className='text-white cursor-pointer w-1/3 inline-block font-bold py-2 px-4 shadow-md bg-chalet-green rounded-t-lg'>
							Redeem
						</Tab>
						<Tab className='text-white cursor-pointer w-1/3 inline-block font-bold py-2 px-4 shadow-md bg-chalet-green rounded-t-lg'>
							Learn
						</Tab>
					</TabList>
					<TabPanel className='bg-white rounded-md shadow-md'>
						<div className='p-7 text-center'>
							Check out some of our latest projects:
						</div>
					</TabPanel>
					<TabPanel className='bg-white rounded-md shadow-md'>
						<div className='p-7 text-center'>
							<div className='w-full flex justify-center'>
								<div className='text-center'>
									<p className='pb-5'>Request merchant to scan your QR code</p>
									<QRCode
										className='mx-auto'
										value='http://91cf2815b256.ngrok.io/dashboard'
									/>
								</div>
							</div>
						</div>
					</TabPanel>
					<TabPanel className='bg-white rounded-md shadow-md'>
						<div className='p-7 text-center'>
							Learn more. Check out our blog.
						</div>
					</TabPanel>
				</Tabs>
			</div>
		</>
	)
}
