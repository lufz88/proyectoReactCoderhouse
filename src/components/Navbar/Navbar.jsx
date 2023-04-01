import CarWidgetContainer from '../CarWidget/CarWidgetContainer';
import styles from './Navbar.module.css';

const Navbar = () => {
	return (
		<div className={styles.navbarContainer}>
			<img
				className={styles.navbarLogo}
				src='https://res.cloudinary.com/dgwuimxmz/image/upload/v1680217535/Pngtree_blue_denim_summer_shorts_5862003_syjlmn.png'
				alt='logo'
			/>
			<ul className={styles.itemsContainer}>
				<li className={styles.item}>Todos</li>
				<li className={styles.item}>Shorts</li>
				<li className={styles.item}>Bermudas</li>
				<li className={styles.item}>Jeans</li>
			</ul>
			<CarWidgetContainer />
		</div>
	);
};

export default Navbar;
