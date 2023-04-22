import { useEffect } from 'react';
import { useState } from 'react';

const FetchingData = () => {
	const [data, setData] = useState([]); // necesito guardar la respuesta de obtenerPost con useState
	const [dataById, setDataById] = useState({}); // por Id trae un objeto específico

	useEffect(() => {
		const obtenerPost = fetch('https://jsonplaceholder.typicode.com/users'); // se obtiene una promesa, por defecto va con GET
		obtenerPost
			.then(res => res.json()) // la respuesta hay que transformarla a algo que pueda entender js, devuelve otra promesa
			.then(res => setData(res));

		const obtenerDataById = fetch('https://jsonplaceholder.typicode.com/users/2');
		obtenerDataById.then(res => res.json()).then(res => setDataById(res));
	}, []); // lo meto en un useEffect porque la peticion es pesada y no queremos que vuelva a hacerse cada vez que se renderiza el componente.

	console.log(data);
	console.log(dataById);

	const crearNuevoUsuario = () => {
		// en la vida real deberia haber un formulario para que el usuario cree el nuevo producto o lo que sea

		const crearUsuario = fetch('https://jsonplaceholder.typicode.com/users', {
			method: 'POST',
			headers: {
				authorization: 'asdnujfej345324', //token
				'content-type': 'aplication-json', // en los headerspaso toda la info de que tipo de datos envio, tokens de autorizacion, etc
			},
			body: JSON.stringify({
				// para enviar los datos los tengo que enviar como string, por lo que uso la funcion JSON.stringify
				userId: 7,
				name: 'Pepito',
				edad: 12,
			}),
		});
		crearUsuario.then(res => res.json()).then(res => console.log(res));
	};

	// el metodo PATCH pisa solo la información que quiera cambiar (el name, o la edad del usuario por ejemplo). solo le paso lo que quiero modificar
	// en el metodo PUT necesito enviarle ademas de lo que quiero cambiar, toda la otra informacion si no quiero perderla. Si envio un 'name' diferente y solo eso, se van a borrar el userID y la edad

	return (
		<div>
			<h1>Peticiones</h1>
			<button onClick={crearNuevoUsuario}>Click!!</button>
		</div>
	);
};

export default FetchingData;
