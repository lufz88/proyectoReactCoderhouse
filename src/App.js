import './App.css';
import CounterContainer from './components/Counter/CounterContainer';
import ItemList from './components/ItemList/ItemList';
import { Navbar } from './components/Navbar/Navbar';

function App() {
	let saludo = 'Hola Juancito como estas?';
	let nombre = 'Pendorcho';

	return (
		/* hasta el return todo es js, pero a partir de acá no, es jsx. Para meter algo de js tengo que envolverlo entre llaves*/ <div className="App">
			<Navbar />
			{/*Navbar es hijo de App porque lo importa y lo renderiza. A su vez es hermano de ItemList. 
      Unicamente puedo enviar informacion de componentes padres a componentes hijos ('props' - formas de enviar info). Por ejemplo, puedo usar variables de App en Navbar o ItemList, pero no puedo usar variables de Navbar en App o ItemList*/}
			<ItemList saludo={saludo} edad={23} nombre={nombre} />
			<h1>Home</h1>
			<CounterContainer />
		</div>
	);
}

export default App;

// creando una funcion creamos un componente en React - en la carpeta 'components' creamos carpetas por componentes con primera letra mayuscula por convencion. En cada carpeta de componente tengo el archivo jsx y el archivo de estilos. De esta manera la organización mejora.
