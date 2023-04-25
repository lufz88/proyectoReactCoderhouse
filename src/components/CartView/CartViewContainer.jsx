import { useContext } from 'react';
import CartView from './CartView';
import { CartContext } from '../../context/CartContext';

const CartViewContainer = () => {
	const { cart } = useContext(CartContext);

	return <CartView cart={cart} />;
};

export default CartViewContainer;
