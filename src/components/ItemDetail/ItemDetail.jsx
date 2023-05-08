import styles from './ItemDetail.module.css';
import CounterItemContainer from '../Counter/CounterItemContainer';

const ItemDetail = ({ product, onAdd, totalQuantity }) => {
	return (
		<div className={styles.ItemDetail}>
			<img src={product.img} alt='imagen del producto' className={styles.productImage} />
			<div className={styles.infoContainer}>
				<p>{product.title}</p>
				<p>{product.description}</p>
				<p>
					Precio: <span>$ {product.price}</span>
				</p>
				{product.stock > 0 ? <CounterItemContainer stock={product.stock} onAdd={onAdd} initial={totalQuantity} /> : <p>No hay stock</p>}
			</div>
		</div>
	);
};

export default ItemDetail;
