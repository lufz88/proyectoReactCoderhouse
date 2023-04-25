import { createContext, useState } from 'react';

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	const agregarAlCarrito = () => {};
	const eliminarDelCarrito = () => {};
	const limpiarCarrito = () => {};

	let data = { cart, setCart, agregarAlCarrito, eliminarDelCarrito, limpiarCarrito };

	return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
