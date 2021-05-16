import './App.css'
import { FaLeaf } from 'react-icons/fa'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import IndividualForm from './components/individuals'
import BrandForm from './components/brands'

function App() {
	return (
		<>
			<div className='wrapper bg-chalet-green block md:flex items-center justify-center h-screen'>
				<div className='left-section bg-chalet-green-400 text-white h-screen w-full md:w-1/2 flex items-center justify-center'>
					<div className='content text-center'>
						<h1 className='pb-4'>
							Find out your carbon footprint <br />
							for free in 2 minutes!
						</h1>
						<p>The easy step to a more sustainable life.</p>
						<button className='shadow-md mt-6 uppercase font-bold bg-chalet-green-600 px-5 py-2 rounded-lg uppercase hover:bg-chalet-green active:bg-chalet-green-100 focus:outline-none'>
							Start now
						</button>
					</div>
				</div>
				<div className='right-section bg-chalet-green-600 w-full md:w-1/2 h-screen flex items-center justify-center'>
					<div className='text-wrap text-center'>
						<h1 className='text-white font-bold text-5xl pb-4 flex justify-center'>
							Carbonbase <FaLeaf className='pl-4' />
						</h1>
						<p className='text-white'>Let's stop the climate clock.</p>
						<div className='choose-login mt-7'>
							<Tabs className='tabs-width'>
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
							</Tabs>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default App
