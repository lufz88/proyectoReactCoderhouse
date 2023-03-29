const ItemList = ({ edad, nombre, saludo }) => {
	// let { edad, nombre, saludo } = props; // lo mejor es desestructurar las props dentro de los paréntesis mismos

	//todo lo que reciba como parámetros va a ser un objeto (las props) con tantas propiedades como yo le envie al componente desde el componente padre

	// siempre se separara al componente en el contenido de la logica (contenedor) y la presentacion (el return de 'html')

	return (
		<div>
			{saludo}, {edad}, {nombre}{' '}
		</div>
	);
};

export default ItemList;
