import ItemList from './ItemList';
import { products } from '../../productsMock';
import { useState, useEffect } from 'react';

const ItemListContainer = () => {
	//para guardar y usar una variable uso el useState()
	const [items, setItems] = useState([]);

	// el useEffect recibe un callback y un arreglo de dependencias. Si este ultimo está vacío, el callback se ejecuta una sola vez. Tambien se le puede poner alguna variable para que el useEffect este a la escucha de la misma y se ejecute cuando se cumpla. Lo necesito porque si cambia el estado de algo en el componente, este se vuelve a leer y se corre el riesgo de ejecutar nuevamente (o en un ciclo infinito) alguna funcion. Tambien sirve para manejar tareas pesadas ya que se ejecuta luego de toda la logica.
	useEffect(() => {
		// Una promesa es un objeto que puede tener tres propiedades (pending -siempre pasa por este estado, fullfilled, rejected)La promesa se resuelve o se rechaza dependiendo de cómo sale la peticion. Las promesas son asincrónicas, no se resuelven en el momento. El codigo se sigue ejecutando mientras se espera la resolucion o el rechazo.
		const task = new Promise((resolve, reject) => {
			resolve(products);
		}); // en este ejemplo nosotros determinamos si se resuelve o no pero no es el caso cuando trabajamos con peticiones a un servidor

		// ahora vamos a manipularla con '.then()' y '.catch()' (son encadenables)
		// en el '.then' es donde cae el resolve, si llega un reject va a caer en el .catch()
		task.then(res => setItems(res)) // res (cualquier nombre) es el resolve que llega
			.catch(error => console.log(error)); // acá vendria un mensaje o código de error
	}, []); // recibe un callback y un arreglo de dependencias. Si este ultimo está vacío, el callback se ejecuta una sola vez

	return (
		<div>
			<ItemList items={items} />
		</div>
	);
};

export default ItemListContainer;
