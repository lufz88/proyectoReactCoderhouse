import { Button } from '@mui/material';
import React from 'react';

const CounterItem = ({ cantidad, sumar, restar, onAdd }) => {
	return (
		<div>
			<Button onClick={restar}>-</Button>
			<span>{cantidad}</span>
			<Button onClick={sumar}>+</Button>
			<div>
				<Button onClick={() => onAdd(cantidad)}>Agregar al Carrito</Button>
			</div>
		</div>
	);
};

export default CounterItem;
