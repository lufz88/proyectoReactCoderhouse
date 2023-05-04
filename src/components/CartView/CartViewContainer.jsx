import { useContext } from 'react';
import CartView from './CartView';
import { CartContext } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';

const CartViewContainer = () => {
	const { cart, limpiarCarrito, getTotalPrice, eliminarDelCarrito } = useContext(CartContext);
	const navigate = useNavigate();

	let total = getTotalPrice();

	return <CartView navigate={navigate} cart={cart} eliminarDelCarrito={eliminarDelCarrito} limpiarCarrito={limpiarCarrito} total={total} />;
};

export default CartViewContainer;
