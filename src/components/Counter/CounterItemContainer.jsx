import React, { useEffect, useState } from 'react';
import CounterItem from './CounterItem';

const CounterItemContainer = ({ stock, onAdd, initial = 1 }) => {
	const [cantidad, setCantidad] = useState(initial);

	useEffect(() => {
		setCantidad(initial);
	}, [initial]);

	const sumar = () => {
		if (cantidad < stock) {
			setCantidad(cantidad + 1);
		}
	};
	const restar = () => {
		if (cantidad > 1) {
			setCantidad(cantidad - 1);
		}
	};

	return <CounterItem cantidad={cantidad} sumar={sumar} restar={restar} onAdd={onAdd} />;
};

export default CounterItemContainer;
