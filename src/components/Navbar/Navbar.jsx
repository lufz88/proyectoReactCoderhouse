// un componente es una funcion, usualmente se usa así

// import './Navbar.css'; //se importa la hoja de estilos de esta manera,

//otra forma es trabajar con modulos de css

import styles from './Navbar.module.css'; // las clases van a pasar a ser una propiedad del objeto styles. De esta manera cada clase va a ser propia de cada modulo y no chocaria con otra clase de algun otro archivo css importado

export const Navbar = () => {
	return (
		/* como class es palabra reservada en js, no se usa class, sino className*/ <div
			className={styles.containerNavbar}>
			<ul>
				{/* cuando necesito hacer poco de css, puedo usar el atributo style. recibe un objeto y cada propiedad se usa con camelCase*/}
				<li style={{ backgroundColor: 'blue' }}>productos</li>
				<li>servicios</li>
				<li>contact</li>
			</ul>
		</div>
	);
};
