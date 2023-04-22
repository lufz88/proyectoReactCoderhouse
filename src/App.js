import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavbarContainer from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<NavbarContainer />}>
					<Route path='/' element={<ItemListContainer />} />
					<Route path='/shorts' element={<ItemListContainer />} />
					<Route path='/bermudas' element={<ItemListContainer />} />
					<Route path='/jeans' element={<ItemListContainer />} />
					{/* <Route path='/' element={<ItemDetailContainer />} /> */}
					<Route path='*' element={<h1>404 - La ruta no existe</h1>} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
