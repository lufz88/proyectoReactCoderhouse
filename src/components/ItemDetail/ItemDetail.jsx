import styles from './ItemDetail.module.css';
import CounterContainer from '../Counter/CounterContainer';

const ItemDetail = ({ product }) => {
	return (
		<div className={styles.ItemDetail}>
			<img src={product.img} alt='imagen del producto' className={styles.productImage} />
			<div className={styles.infoContainer}>
				<p>{product.title}</p>
				<p>{product.description}</p>
				<p>
					Precio: <span>$ {product.price}</span>
				</p>
				<CounterContainer product={product} />
			</div>
		</div>
	);
};

export default ItemDetail;
