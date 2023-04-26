import { useContext } from 'react';
import CartWidget from './CartWidget';
import { CartContext } from '../../context/CartContext';

const CartWidgetContainer = () => {
	const { getTotalQuantity } = useContext(CartContext);

	let total = getTotalQuantity();

	return <CartWidget total={total} />;
};

export default CartWidgetContainer;
