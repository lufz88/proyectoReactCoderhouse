import { Button, TextField } from '@mui/material';

const FormCheckout = ({ orderId, handleChange, handleSubmit, errors }) => {
	return (
		<>
			{orderId ? (
				<>
					<h3>Tu código de compra es: {orderId}</h3>
					<p>Guardalo porque te será solicitado para recibir tu compra</p>
					<Button>Realizar otra compra</Button>
				</>
			) : (
				<form onSubmit={handleSubmit}>
					<TextField name='nombre' id='outlined-basic' label='Nombre' variant='outlined' onChange={handleChange} error={errors.nombre ? true : false} helperText={errors.nombre} />
					<TextField name='email' id='outlined-basic' label='Email' variant='outlined' onChange={handleChange} error={errors.email ? true : false} helperText={errors.email} />
					<TextField name='telefono' id='outlined-basic' label='Teléfono' variant='outlined' onChange={handleChange} error={errors.telefono ? true : false} helperText={errors.telefono} />
					<Button variant='contained' type='submit'>
						Comprar
					</Button>
				</form>
			)}
		</>
	);
};

export default FormCheckout;
