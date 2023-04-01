import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';

function App() {
	return (
		<div className='App'>
			<NavbarContainer />
			<ItemListContainer />
		</div>
	);
}

export default App;
