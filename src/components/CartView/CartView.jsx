import { Button, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import styles from './Cart.module.css';

const CartView = ({ cart, limpiarCarrito, total, eliminarDelCarrito, navigate }) => {
	return (
		<div className={styles.CartDetailContainer}>
			{cart.map(element => {
				return (
					<div className={styles.ItemContainer} key={element.id}>
						<div className={styles.ImgContainer}>
							<img src={element.img} alt='imagen del product' />
						</div>
						<div className={styles.ProductDetails}>
							<p>{element.quantity}</p>
							<p>{element.title}</p>
							<p>$ {element.price * element.quantity} </p>
						</div>
						<IconButton className={styles.DeleteButton} aria-label='delete' size='medium' onClick={() => eliminarDelCarrito(element.id)}>
							<DeleteIcon fontSize='inherit' />
						</IconButton>
					</div>
				);
			})}

			{cart.length > 0 ? (
				<>
					<Button style={{ backgroundColor: 'rgba(140, 1, 1, 0.655)' }} variant='contained' onClick={limpiarCarrito}>
						Limpiar Carrito
					</Button>
					<p className={styles.CartText}>El total del carrito es de $ {total}.</p>
					<Button variant='contained' onClick={() => navigate('/checkout')}>
						Terminar compra
					</Button>
				</>
			) : (
				<>
					<p className={styles.CartText}>No hay productos en el carrito</p>
					<Button variant='contained' onClick={() => navigate('/')}>
						Agregar productos
					</Button>
				</>
			)}
		</div>
	);
};

export default CartView;
