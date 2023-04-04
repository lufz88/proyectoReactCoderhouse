import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';

const saludo = 'Bienvenidos a PantsStore';

function App() {
	return (
		<div className='App'>
			<NavbarContainer />
			<ItemListContainer saludo={saludo} />
		</div>
	);
}

export default App;
