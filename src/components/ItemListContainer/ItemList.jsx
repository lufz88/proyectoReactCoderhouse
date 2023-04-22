import ItemCardContainer from '../ItemCard/ItemCardContainer';

const ItemList = ({ items }) => {
	return (
		<div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', padding: '40px' }}>
			{items.map(item => {
				return <ItemCardContainer item={item} key={item.id} />;
			})}
		</div>
	);
};

export default ItemList;
