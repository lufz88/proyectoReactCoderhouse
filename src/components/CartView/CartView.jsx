import { Button } from '@mui/material';
import styles from './Cart.module.css';

const CartView = ({ cart, limpiarCarrito, total, eliminarDelCarrito }) => {
	return (
		<div>
			{cart.map(element => {
				return (
					<div className={styles.ItemContainer}>
						<div className={styles.ImgContainer}>
							<img src={element.img} alt='imagen del product' />
						</div>
						<p>{element.quantity}</p>
						<p>{element.title}</p>
						<p>{element.price * element.quantity} </p>
						<Button onClick={() => eliminarDelCarrito(element.id)}>X</Button>
					</div>
				);
			})}
			<Button onClick={limpiarCarrito}>Limpiar Carrito</Button>
			<p>El total del carrito es {total}</p>
		</div>
	);
};

export default CartView;
