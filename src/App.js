import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavbarContainer from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
// import FetchingData from './components/FetchingData/FetchingData';
// import ItemListContainer from './components/ItemListContainer/ItemListContainer';
// import NavbarContainer from './components/Navbar/NavbarContainer';

function App() {
	return (
		<BrowserRouter>
			{/* donde voy a armar mi sistema de rutas*/}
			<Routes>
				{/* donde voy a poner mis rutas individuales, las voy a englobar */}
				<Route element={<NavbarContainer />}>
					<Route path='/' element={<ItemListContainer />} /> {/*Ruta raiz*/}
					<Route path='/login' element={<h1> Este es un login </h1>} />
					{/*cada truta. Necesaita dos parámetreos, 'path' (donde va la ruta que se muestra en la barra de navegacion) y 'element' (donde va el componente que queremos mostrar)*/}
					<Route path='/sign-up' element={<h1> Acá deberías registrarte </h1>} />
					<Route path='*' element={<h1>404 - La ruta no existe</h1>} />
					{/*ruta por defecto*/}
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
