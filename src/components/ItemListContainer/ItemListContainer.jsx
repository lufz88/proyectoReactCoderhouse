import ItemList from './ItemList';
import { products } from '../../productsMock';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

const ItemListContainer = () => {
	const [items, setItems] = useState([]);
	const { categoryName } = useParams();

	useEffect(() => {
		const filteredProducts = products.filter(product => product.category === categoryName);

		const task = new Promise((resolve, reject) => {
			resolve(categoryName ? filteredProducts : products);
		});

		task.then(res => setItems(res)).catch(error => console.log(error));
	}, [categoryName]);

	return (
		<div>
			<ItemList items={items} />
		</div>
	);
};

export default ItemListContainer;
