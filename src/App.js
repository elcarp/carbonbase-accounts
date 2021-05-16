import './App.css'
import { FaLeaf } from 'react-icons/fa'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import IndividualForm from './components/individuals'
import BrandForm from './components/brands'
import Dashboard from './components/Dashboard'
import Preferences from './components/Preferences'
import { BrowserRouter as Router } from 'react-router-dom'
import Navigation from './layout/navigation'
import Main from './layout/main'
import Login from './layout/login'

function App() {
	return (
		<>
			<Router>
				<Navigation />
				<Main />
			</Router>
			<Login />
		</>
	)
}

export default App
