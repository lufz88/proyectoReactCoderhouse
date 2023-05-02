import React, { useContext, useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router';
import { CartContext } from '../../context/CartContext';
import { dataBase } from '../../firebaseConfig';
import { getDoc, collection, doc } from 'firebase/firestore';

const ItemDetailContainer = () => {
	const [product, setProduct] = useState([]);
	const { id } = useParams();
	const { agregarAlCarrito, getQuantityById } = useContext(CartContext);

	const onAdd = cantidad => {
		const data = { ...product, quantity: cantidad };
		agregarAlCarrito(data);
	};

	let totalQuantity = getQuantityById(product.id);

	useEffect(() => {
		const itemsCollection = collection(dataBase, 'products');
		const refDoc = doc(itemsCollection, id);
		getDoc(refDoc)
			.then(res =>
				setProduct({
					...res.data(),
					id: res.id,
				})
			)
			.catch(err => console.log(err));
	}, [id]);

	return <ItemDetail product={product} onAdd={onAdd} totalQuantity={totalQuantity} />;
};

export default ItemDetailContainer;
