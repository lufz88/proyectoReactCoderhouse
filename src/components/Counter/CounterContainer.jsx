import React, { useContext, useState } from 'react';
import Counter from './Counter';
import { CartContext } from '../../context/CartContext';

const CounterContainer = ({ product }) => {
	const [cantidad, setCantidad] = useState(0);
	const { agregarAlCarrito } = useContext(CartContext);

	const sumar = () => {
		if (cantidad < product.stock) {
			setCantidad(cantidad + 1);
		}
	};
	const restar = () => {
		if (cantidad > 0) {
			setCantidad(cantidad - 1);
		}
	};

	const onAdd = () => {
		const producto = { ...product, quantity: cantidad };
		agregarAlCarrito(producto);
	};

	return <Counter cantidad={cantidad} sumar={sumar} restar={restar} onAdd={onAdd} />;
};

export default CounterContainer;
