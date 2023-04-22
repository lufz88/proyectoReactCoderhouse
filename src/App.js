import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavbarContainer from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<NavbarContainer />}>
					<Route path='/' element={<ItemListContainer />} />
					<Route path='/category/:categoryName' element={<ItemListContainer />} />
					<Route path='/category/:categoryName' element={<ItemListContainer />} />
					<Route path='/category/:categoryName' element={<ItemListContainer />} />
					<Route path='/itemDetail/:id' element={<ItemDetailContainer />} />
					<Route path='*' element={<h1>404 - La ruta no existe</h1>} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
