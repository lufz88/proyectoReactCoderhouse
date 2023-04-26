import { AiOutlineShoppingCart } from 'react-icons/ai';
import styles from './CartWidget.module.css';

const CartWidget = ({ getTotalQuantity }) => {
	return (
		<>
			<AiOutlineShoppingCart size={40} color='whitesmoke' />
			<div className={styles.counter}>{getTotalQuantity}</div>
		</>
	);
};

export default CartWidget;
