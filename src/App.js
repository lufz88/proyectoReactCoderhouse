import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavbarContainer from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import CartContextProvider from './context/CartContext';
import CartViewContainer from './components/CartView/CartViewContainer';
import FormCheckoutContainer from './components/FormCheckout/FormCheckoutContainer';

function App() {
	return (
		<BrowserRouter>
			<CartContextProvider>
				<Routes>
					<Route element={<NavbarContainer />}>
						<Route path='/' element={<ItemListContainer />} />
						<Route path='/category/:categoryName' element={<ItemListContainer />} />
						<Route path='/category/:categoryName' element={<ItemListContainer />} />
						<Route path='/category/:categoryName' element={<ItemListContainer />} />
						<Route path='/itemDetail/:id' element={<ItemDetailContainer />} />
						<Route path='/cart' element={<CartViewContainer />} />
						<Route path='/checkout' element={<FormCheckoutContainer />} />
						<Route path='*' element={<h1>404 - La ruta no existe</h1>} />
					</Route>
				</Routes>
			</CartContextProvider>
		</BrowserRouter>
	);
}

export default App;
