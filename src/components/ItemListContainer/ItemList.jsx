import ItemCardContainer from '../ItemCard/ItemCardContainer';
import styles from './ItemList.module.css';

const ItemList = ({ items }) => {
	return (
		<div className={styles.ItemList}>
			{items.map(item => {
				return <ItemCardContainer item={item} key={item.id} />;
			})}
		</div>
	);
};

export default ItemList;
