import React, { useState } from 'react';
import Counter from './Counter';

const CounterContainer = ({ stock, onAdd }) => {
	const [cantidad, setCantidad] = useState(0);

	const sumar = () => {
		if (cantidad < stock) {
			setCantidad(cantidad + 1);
		}
	};
	const restar = () => {
		if (cantidad > 0) {
			setCantidad(cantidad - 1);
		}
	};

	return <Counter cantidad={cantidad} sumar={sumar} restar={restar} onAdd={onAdd} />;
};

export default CounterContainer;
