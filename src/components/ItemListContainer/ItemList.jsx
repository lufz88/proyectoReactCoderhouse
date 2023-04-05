import ItemCard from './ItemCard';

const ItemList = ({ items }) => {
	return (
		<div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', padding: '40px' }}>
			{items.map(item => {
				return (
					<ItemCard
						item={item}
						key={item.id}
					/>
				);
			})}
		</div>
	);
};

export default ItemList;
