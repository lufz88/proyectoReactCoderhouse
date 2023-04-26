import { AiOutlineShoppingCart } from 'react-icons/ai';
import styles from './CartWidget.module.css';

const CartWidget = ({ total }) => {
	return (
		<>
			<AiOutlineShoppingCart size={40} color='whitesmoke' />
			<div className={styles.counter}>{total}</div>
		</>
	);
};

export default CartWidget;
