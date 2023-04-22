import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';

const ItemCard = ({ item }) => {
	return (
		<Card sx={{ width: 345, margin: '8px 0' }}>
			<CardMedia sx={{ height: 140 }} image={item.img} title='green iguana' />
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
				<Button size='small'>Ver detalle</Button>
			</CardActions>
		</Card>
	);
};

export default ItemCard;
