import CartWidgetContainer from '../CartWidget/CartWidgetContainer';
import styles from './Navbar.module.css';
import { Outlet, Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<>
			<div className={styles.navbarContainer}>
				<Link to='/'>
					<img className={styles.navbarLogo} src='https://res.cloudinary.com/dgwuimxmz/image/upload/v1680217535/Pngtree_blue_denim_summer_shorts_5862003_syjlmn.png' alt='logo' />
				</Link>
				<ul className={styles.itemsContainer}>
					<Link to='/' className={styles.item}>
						<li>Todos</li>
					</Link>
					<Link to='/category/shorts' className={styles.item}>
						<li>Shorts</li>
					</Link>
					<Link to='/category/bermudas' className={styles.item}>
						<li>Bermudas</li>
					</Link>
					<Link to='/category/jeans' className={styles.item}>
						<li>Jeans</li>
					</Link>
				</ul>
				<Link to='/cart' className={styles.item}>
					<CartWidgetContainer />
				</Link>
			</div>
			<Outlet /> {/* Darle acceso al wrapper a los children */}
		</>
	);
};

export default Navbar;
