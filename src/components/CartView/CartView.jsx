import { Button } from '@mui/material';

const CartView = ({ cart, limpiarCarrito, getTotalPrice }) => {
	return (
		<div>
			<Button onClick={limpiarCarrito}>Limpiar Carrito</Button>
			<p>El total del carrito es {getTotalPrice}</p>
		</div>
	);
};

export default CartView;
