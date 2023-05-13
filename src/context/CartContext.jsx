import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	const isInCart = id => {
		let existe = cart.some(element => element.id === id);
		return existe;
	};

	const agregarAlCarrito = producto => {
		const existe = isInCart(producto.id);
		if (existe) {
			let newCart = cart.map(elemento => {
				if (elemento.id === producto.id) {
					return { ...elemento, quantity: producto.quantity };
				} else {
					return elemento;
				}
			});
			setCart(newCart);
		} else {
			setCart([...cart, producto]);
		}
	};

	const eliminarDelCarrito = id => {
		const newCart = cart.filter(element => element.id !== id);
		Swal.fire({
			title: '¿Está seguro que desea eliminar el producto?',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#d33',
			cancelButtonColor: '#3085d6',
			confirmButtonText: '¡Sí, estoy seguro!',
			cancelButtonText: 'Cancelar',
		}).then(result => {
			if (result.isConfirmed) {
				Swal.fire('Eliminado', 'Su producto fue eliminado', 'success');
				setCart(newCart);
			}
		});
	};
	const limpiarCarrito = () => {
		Swal.fire({
			title: '¿Está seguro que desea limpiar el carrito?',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#d33',
			cancelButtonColor: '#3085d6',
			confirmButtonText: '¡Sí, estoy seguro!',
			cancelButtonText: 'Cancelar',
		}).then(result => {
			if (result.isConfirmed) {
				Swal.fire('Eliminado', 'Su carrito fue eliminado', 'success');
				setCart([]);
			}
		});
	};

	const finalizarCompra = () => {
		setCart([]);
	};

	const getTotalPrice = () => {
		let total = cart.reduce((acc, elemento) => acc + elemento.price * elemento.quantity, 0);
		return total;
	};

	const getTotalQuantity = () => {
		let total = cart.reduce((acc, elemento) => acc + elemento.quantity, 0);
		return total;
	};

	const getQuantityById = id => {
		let product = cart.find(elemento => elemento.id === id);
		return product?.quantity;
	};

	const navigate = useNavigate();

	let data = { cart, agregarAlCarrito, eliminarDelCarrito, limpiarCarrito, getTotalPrice, getTotalQuantity, getQuantityById, navigate, finalizarCompra };

	return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
