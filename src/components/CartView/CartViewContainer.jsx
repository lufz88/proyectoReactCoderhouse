import { useContext } from 'react';
import CartView from './CartView';
import { CartContext } from '../../context/CartContext';

const CartViewContainer = () => {
	const { cart, limpiarCarrito, getTotalPrice, eliminarDelCarrito, navigate } = useContext(CartContext);

	let total = getTotalPrice();

	return <CartView navigate={navigate} cart={cart} eliminarDelCarrito={eliminarDelCarrito} limpiarCarrito={limpiarCarrito} total={total} />;
};

export default CartViewContainer;
