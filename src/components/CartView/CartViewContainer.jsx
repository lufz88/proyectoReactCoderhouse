import { useContext } from 'react';
import CartView from './CartView';
import { CartContext } from '../../context/CartContext';

const CartViewContainer = () => {
	const { cart, limpiarCarrito, getTotalPrice } = useContext(CartContext);

	return <CartView cart={cart} limpiarCarrito={limpiarCarrito} getTotalPrice={getTotalPrice} />;
};

export default CartViewContainer;
