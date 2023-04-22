import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavbarContainer from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
// import FetchingData from './components/FetchingData/FetchingData';
// import ItemListContainer from './components/ItemListContainer/ItemListContainer';
// import NavbarContainer from './components/Navbar/NavbarContainer';

function App() {
	return (
		<div className='App'>
			<NavbarContainer />
			<ItemListContainer />
		</div>
	);
}

export default App;
