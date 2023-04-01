import { AiOutlineShoppingCart } from 'react-icons/ai';
import styles from './CarWidget.module.css';

const CarWidget = () => {
	return (
		<>
			<AiOutlineShoppingCart
				size={40}
				color='whitesmoke'
			/>
			<div className={styles.counter}>5</div>
		</>
	);
};

export default CarWidget;
