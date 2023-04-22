import ItemList from './ItemList';
import { products } from '../../productsMock';
import { useState, useEffect } from 'react';

const ItemListContainer = () => {
	const [items, setItems] = useState([]);

	useEffect(() => {
		const task = new Promise((resolve, reject) => {
			resolve(products);
		});

		task.then(res => setItems(res)).catch(error => console.log(error));
	}, []);

	return (
		<div>
			<ItemList items={items} />
		</div>
	);
};

export default ItemListContainer;
