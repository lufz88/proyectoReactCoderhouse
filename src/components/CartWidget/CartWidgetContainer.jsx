import { useContext } from 'react';
import CartWidget from './CartWidget';
import { CartContext } from '../../context/CartContext';

const CartWidgetContainer = () => {
	const { getTotalQuantity } = useContext(CartContext);

	return <CartWidget getTotalQuantity={getTotalQuantity} />;
};

export default CartWidgetContainer;
