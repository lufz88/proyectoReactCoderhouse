import { createContext, useState } from 'react';

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
					return { ...elemento, quantity: elemento.quantity + producto.quantity };
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
		setCart(newCart);
	};
	const limpiarCarrito = () => {
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

	let data = { cart, agregarAlCarrito, eliminarDelCarrito, limpiarCarrito, getTotalPrice, getTotalQuantity };

	return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
