import { CartContext } from '../../context/CartContext';
import { addDoc, collection, doc, serverTimestamp, updateDoc } from 'firebase/firestore';
import { dataBase } from '../../firebaseConfig';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import FormCheckout from './FormCheckout';
import { useContext, useState } from 'react';

const FormCheckoutContainer = () => {
	const { cart, getTotalPrice, finalizarCompra, navigate } = useContext(CartContext);

	const [orderId, setOrderId] = useState(null);

	const checkoutFn = data => {
		let total = getTotalPrice();

		let dataOrder = {
			buyer: data,
			items: cart,
			total: total,
			date: serverTimestamp(),
		};
		const ordersCollection = collection(dataBase, 'orders');

		addDoc(ordersCollection, dataOrder).then(res => setOrderId(res.id));

		cart.map(product =>
			updateDoc(doc(dataBase, 'products', product.id), {
				stock: product.stock - product.quantity,
			})
		);

		finalizarCompra();
	};

	const { handleChange, handleSubmit, errors } = useFormik({
		initialValues: {
			nombre: '',
			email: '',
			telefono: '',
		},
		onSubmit: checkoutFn,
		validationSchema: Yup.object().shape({
			nombre: Yup.string().required('Este campo es obligatorio').min(3, 'El nombre debe tener al menos 3 caracteres'),
			email: Yup.string().email('El campo debe ser un email: ejemplo@ejemplo.com').required('Este campo es obligatorio'),
			telefono: Yup.number().required('Este campo es obligatorio').min(8, 'El teléfono debe tener al menos 8 números'),
		}),
		validateOnChange: false,
	});

	return <FormCheckout navigate={navigate} orderId={orderId} handleChange={handleChange} handleSubmit={handleSubmit} errors={errors} />;
};

export default FormCheckoutContainer;
