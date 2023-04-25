import { AiOutlineShoppingCart } from 'react-icons/ai';
import styles from './CartWidget.module.css';

const CartWidget = ({ cart }) => {
	return (
		<>
			<AiOutlineShoppingCart size={40} color='whitesmoke' />
			<div className={styles.counter}>{cart.length}</div>
		</>
	);
};

export default CartWidget;
