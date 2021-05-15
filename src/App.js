import './App.css'
import { FaLeaf } from 'react-icons/fa'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
// import { IndividualForm } from './components/individual-form'

function App() {
	return (
		<>
			<div className='wrapper bg-chalet-green flex items-center justify-center h-screen'>
				<div className='left-section bg-chalet-green-400 text-white h-screen w-1/2 flex items-center justify-center'>
					<div className='content text-center'>
						<h1 className='pb-4'>
							Find out your carbon footprint <br />
							for free in 2 minutes!
						</h1>
						<p>The easy step to a more sustainable life.</p>
						<button className='mt-6 uppercase font-bold bg-chalet-green-600 px-5 py-2 rounded-lg uppercase hover:bg-chalet-green active:bg-chalet-green-100 focus:outline-none'>
							Start now
						</button>
					</div>
				</div>
				<div className='right-section bg-chalet-green-600 w-1/2 h-screen flex items-center justify-center'>
					<div className='text-wrap text-center'>
						<h1 className='text-white font-bold text-5xl pb-4 flex'>
							Carbonbase <FaLeaf className='pl-4' />
						</h1>
						<p className='text-white'>Let's stop the climate clock.</p>
						<div className='choose-login mt-7'>
							<Tabs>
								<TabList>
									<Tab className='text-white cursor-pointer w-1/2 inline-block'>
										Individuals
									</Tab>
									<Tab className='text-white cursor-pointer w-1/2 inline-block'>
										Brands
									</Tab>
								</TabList>

								<TabPanel className='text-white'>
									<h2>Sign up / login for individuals</h2>
								</TabPanel>
								<TabPanel className='text-white'>
									<h2>Sign up / login for individuals</h2>
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
