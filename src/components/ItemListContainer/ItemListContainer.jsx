import ItemList from './ItemList';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { dataBase } from '../../firebaseConfig';
import BarLoader from 'react-spinners/BarLoader';
import { getDocs, collection, query, where } from 'firebase/firestore';

const ItemListContainer = () => {
	const [items, setItems] = useState([]);
	const { categoryName } = useParams();

	useEffect(() => {
		let consulta;
		const itemsCollection = collection(dataBase, 'products');

		if (categoryName) {
			const itemsCollectionFiltered = query(itemsCollection, where('category', '==', categoryName));
			consulta = itemsCollectionFiltered;
		} else {
			consulta = itemsCollection;
		}

		getDocs(consulta)
			.then(res => {
				const products = res.docs.map(product => {
					//cada producto trae la info y el id por separado, por lo que tengo que crear un nuevo arreglo donde le pase tanto la data como el id a cada producto
					return {
						...product.data(),
						id: product.id,
					};
				});
				setItems(products);
			})
			.catch(err => console.log(err));
	}, [categoryName]);

	return (
		<div>
			{items.length === 0 ? (
				<div style={{ display: 'flex', justifyContent: 'center', marginTop: '24px' }}>
					<BarLoader color='#0e0d0dc9' height={5} speedMultiplier={0.5} width={400} />
				</div>
			) : (
				<ItemList items={items} />
			)}
		</div>
	);
};

export default ItemListContainer;
