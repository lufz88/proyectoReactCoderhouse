import React, { useContext, useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { products } from '../../productsMock';
import { useParams } from 'react-router';
import { CartContext } from '../../context/CartContext';

const ItemDetailContainer = () => {
	const [product, setProduct] = useState([]);
	const { id } = useParams();
	const { agregarAlCarrito } = useContext(CartContext);

	const onAdd = cantidad => {
		const data = { ...product, quantity: cantidad };
		agregarAlCarrito(data);
	};

	useEffect(() => {
		let foundProduct = products.find(product => product.id === Number(id));
		setProduct(foundProduct);
	}, [id]);

	return <ItemDetail product={product} onAdd={onAdd} />;
};

export default ItemDetailContainer;
