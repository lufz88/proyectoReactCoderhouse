import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';

const ItemCard = ({ item }) => {
	return (
		<Card sx={{ width: 345, margin: '8px 0' }}>
			<CardMedia
				sx={{ height: 140 }}
				image={item.img}
				title='green iguana'
			/>
			<CardContent>
				<Typography
					gutterBottom
					variant='h5'
					component='div'>
					{item.title}
				</Typography>
				<Typography
					variant='body2'
					color='text.secondary'>
					{item.description}
				</Typography>
				<Typography
					variant='body2'
					color='text.secondary'>
					{item.price}
				</Typography>
			</CardContent>
			<CardActions style={{ width: '100%' }}>
				<Button size='small'>Ver detalle</Button>
				<Button size='small'>Learn More</Button>
			</CardActions>
		</Card>
	); // le tengo que pasar algo unico como key para react sepa que cada card (componente) que crea es unico
};

export default ItemCard;
