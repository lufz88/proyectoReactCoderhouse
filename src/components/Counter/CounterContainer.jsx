// const Counter = () => {
// 	let counter = 0; // las variables no pueden cambiarse en React de la forma habitual porque los componentes no pueden mutar. Los componentes cuando escuchan un cambio se vuelven a renderizar. Entonces aunque la cambie la variable, el componente se vuelve a leer y vuelve a inicializar la variable en 0. Aquí entran en juego los Hooks. Los componentes tienen un estado y el estado sí perdura en cada renderizado y se acuerda de su valor anterior.

// 	const sumar = () => {
// 		counter++;
// 	};

// 	const restar = () => {
// 		counter--;
// 	};

// 	return (
// 		<div>
// 			<h1>Este es el contador</h1>
// 			<h3>{counter}</h3>
// 			<button onClick={sumar}>Sumar</button>
// 			<button onClick={restar}>Restar</button>
// 		</div>
// 	);
// };

import CounterPresentation from './CounterPresentation';
import { useState } from 'react'; // importo el hook

const CounterContainer = () => {
	// const counter = useState(0); // para darle un valor inicial, se lo doy en los parametros de useState. Lo que me devuelve useState es un arreglo que va a tener en la primera posicion una variable, y en la segunda una funcion que es la que tengo que usar para cambiar el estado. Lo mejor es desestructurarlo como arreglo

	const [counter, setCounter] = useState(0); // gracias al hooks se recuerda el estado aunque se vuelva a renderizar. Esto nos va a servir para variables que yo necesite manipular y modificar desde el componente.

	const sumar = () => {
		setCounter(counter + 1); // al setter solo le tengo que decir su nuevo valor. No uso reasignaciones porque las hace el propio setter (no usar ++; +=, etc)
	};

	const restar = () => {
		setCounter(counter - 1);
	};

	return (
		<CounterPresentation counter={counter} sumar={sumar} restar={restar} />
	);
};

export default CounterContainer;
