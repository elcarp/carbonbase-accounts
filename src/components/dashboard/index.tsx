import React from 'react'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'

export default function Dashboard() {
	return (
		<>
			<div className='dashboard-page w-full h-screen bg-chalet-green-100'>
				<div className='greeting text-center w-full pt-20'>
					Hi Lise! You currently have <strong>1,000</strong> Carbonbase points
					and have offset <strong>0</strong> tons of CO₂
				</div>

				<Tabs className='w-1/2 mx-auto pt-20'>
					<TabList>
						<Tab className='text-white cursor-pointer w-1/3 inline-block font-bold py-2 px-4 shadow-md bg-chalet-green rounded-t-lg'>
							Earn | Offset
						</Tab>
						<Tab className='text-white cursor-pointer w-1/3 inline-block font-bold py-2 px-4 shadow-md bg-chalet-green rounded-t-lg'>
							Redeem
						</Tab>
						<Tab className='text-white cursor-pointer w-1/3 inline-block font-bold py-2 px-4 shadow-md bg-chalet-green rounded-t-lg'>
							Learn
						</Tab>
					</TabList>
					<TabPanel className='bg-white rounded-md shadow-md'>
						<div className='p-7'>asdf</div>
					</TabPanel>
					<TabPanel className='bg-white rounded-md shadow-md'>
						<div className='p-7'>QR code goes here</div>
					</TabPanel>
					<TabPanel className='bg-white rounded-md shadow-md'>
						<div className='p-7'>Learn more. Check out our blog.</div>
					</TabPanel>
				</Tabs>
			</div>
		</>
	)
}
