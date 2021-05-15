import './App.css'
import { FaLeaf } from 'react-icons/fa'

function App() {
	return (
		<>
			<div className='wrapper bg-chalet-green flex items-center justify-center h-screen'>
				<div className='left-section bg-chalet-green-100 h-screen w-1/2 flex items-center justify-center'>
					<div className='content'>
						<h1 className='pb-4'>
							Find out your carbon footprint <br />
							for free in 2 minutes!
						</h1>
						<p>The easy step to a more sustainable life.</p>
					</div>
				</div>
				<div className='right-section bg-chalet-green w-1/2 h-screen flex items-center justify-center'>
					<div className='text-wrap text-center'>
						<h1 className='text-white font-bold text-5xl pb-4 flex'>
							Carbonbase <FaLeaf className='pl-4' />
						</h1>
						<p className='text-white'>Let's stop the climate clock.</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default App
