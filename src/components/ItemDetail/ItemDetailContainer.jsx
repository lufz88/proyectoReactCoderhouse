import React, { useContext, useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router';
import { CartContext } from '../../context/CartContext';
import { dataBase } from '../../firebaseConfig';
import { getDoc, collection, doc } from 'firebase/firestore';
import Swal from 'sweetalert2';

const ItemDetailContainer = () => {
	const [errorMsg, setErrorMsg] = useState('');
	const [product, setProduct] = useState({});
	const { id } = useParams();
	const { agregarAlCarrito, getQuantityById } = useContext(CartContext);

	const onAdd = cantidad => {
		const data = { ...product, quantity: cantidad };
		agregarAlCarrito(data);
		Swal.fire({
			position: 'top-end',
			icon: 'success',
			title: 'Su producto fue agregado',
			showConfirmButton: false,
			timer: 1500,
		});
	};

	let totalQuantity = getQuantityById(product.id);

	useEffect(() => {
		const itemsCollection = collection(dataBase, 'products');
		const refDoc = doc(itemsCollection, id);
		getDoc(refDoc)
			.then(res => {
				res.data()
					? setProduct({
							...res.data(),
							id: res.id,
					  })
					: setErrorMsg('El Producto no existe');
			})
			.catch(err => console.log(err));
	}, [id]);

	return <ItemDetail product={product} onAdd={onAdd} totalQuantity={totalQuantity} errorMsg={errorMsg} />;
};

export default ItemDetailContainer;
