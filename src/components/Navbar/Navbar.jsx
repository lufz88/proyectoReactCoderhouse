import CarWidgetContainer from '../CarWidget/CarWidgetContainer';
import styles from './Navbar.module.css';
import { Outlet, Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<>
			<div className={styles.navbarContainer}>
				<Link to='/'>
					{/* en el 'to' le pongo la ruta a donde quiero que vaya*/}
					<img className={styles.navbarLogo} src='https://res.cloudinary.com/dgwuimxmz/image/upload/v1680217535/Pngtree_blue_denim_summer_shorts_5862003_syjlmn.png' alt='logo' />
				</Link>
				<ul className={styles.itemsContainer}>
					<Link to='/login'>
						<li className={styles.item}>Todos</li>
					</Link>
					<li className={styles.item}>Shorts</li>
					<li className={styles.item}>Bermudas</li>
					<li className={styles.item}>Jeans</li>
				</ul>
				<CarWidgetContainer />
			</div>
			<Outlet /> {/* Darle acceso al wrapper a los children */}
		</>
	);
};

export default Navbar;
