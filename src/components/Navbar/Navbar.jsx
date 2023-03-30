import CarWidgetContainer from '../CarWidget/CarWidgetContainer';

const Navbar = () => {
	return (
		<div style={{ display: 'flex' }}>
			<img
				src='https://res.cloudinary.com/dgwuimxmz/image/upload/v1680217535/Pngtree_blue_denim_summer_shorts_5862003_syjlmn.png'
				alt='logo'
				style={{ width: '150px', height: '150px' }}
			/>
			<ul>
				<li>Todos</li>
				<li>Shorts</li>
				<li>Bermudas</li>
				<li>Jeans</li>
			</ul>
			<CarWidgetContainer />
		</div>
	);
};

export default Navbar;
