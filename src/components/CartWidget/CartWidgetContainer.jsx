import { useContext } from 'react';
import CartWidget from './CartWidget';
import { CartContext } from '../../context/CartContext';

const CartWidgetContainer = () => {
	const { cart } = useContext(CartContext);

	return <CartWidget cart={cart} />;
};

export default CartWidgetContainer;
