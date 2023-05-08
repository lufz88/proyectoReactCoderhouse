import { Button } from '@mui/material';
import styles from './Counter.module.css';

const CounterItem = ({ cantidad, sumar, restar, onAdd }) => {
	return (
		<div>
			<Button className={styles.ButtonAddRemove} size='small' onClick={restar}>
				-
			</Button>
			<span>{cantidad}</span>
			<Button className={styles.ButtonAddRemove} size='small' onClick={sumar}>
				+
			</Button>
			<div>
				<Button className={styles.ButtonAddToCart} variant='contained' onClick={() => onAdd(cantidad)}>
					Agregar al Carrito
				</Button>
			</div>
		</div>
	);
};

export default CounterItem;
