import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { products } from '../../productsMock';
import { useParams } from 'react-router';

const ItemDetailContainer = () => {
	const [product, setProduct] = useState([]);
	const { id } = useParams();

	useEffect(() => {
		let foundProduct = products.find(product => product.id === Number(id));
		setProduct(foundProduct);
	}, [id]);

	return <ItemDetail product={product} />;
};

export default ItemDetailContainer;
