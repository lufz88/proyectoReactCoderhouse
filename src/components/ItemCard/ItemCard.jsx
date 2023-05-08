import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const ItemCard = ({ item }) => {
	return (
		<Card sx={{ width: 345, margin: '8px 0', backgroundColor: '#8DA7C4' }}>
			<CardMedia sx={{ height: 150, width: 150, margin: '0 auto', borderRadius: '20px' }} image={item.img} title={item.title} />
			<CardContent>
				<Typography gutterBottom variant='h5' component='div'>
					{item.title}
				</Typography>
				<Typography variant='body2' color='text.secondary'>
					{item.description}
				</Typography>
				<Typography variant='body2' color='text.secondary'>
					{item.price}
				</Typography>
			</CardContent>
			<CardActions style={{ width: '100%' }}>
				<Link to={`/itemDetail/${item.id}`}>
					<Button variant='contained' size='small'>
						Ver detalle
					</Button>
				</Link>
			</CardActions>
		</Card>
	);
};

export default ItemCard;
