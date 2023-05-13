import { Button, TextField } from '@mui/material';
import styles from './FormCheckout.module.css';

const FormCheckout = ({ orderId, handleChange, handleSubmit, errors, navigate }) => {
	return (
		<>
			{orderId ? (
				<div className={styles.OrderContainer}>
					<h3>Tu código de compra es: {orderId}</h3>
					<p>Guardalo porque te será solicitado para recibir tu compra</p>
					<Button variant='contained' onClick={() => navigate('/')}>
						Realizar otra compra
					</Button>
				</div>
			) : (
				<form className={styles.FormContainer} onSubmit={handleSubmit}>
					<TextField name='nombre' id='outlined-basic' label='Nombre' variant='outlined' onChange={handleChange} error={errors.nombre ? true : false} helperText={errors.nombre} />
					<TextField name='email' id='outlined-basic' label='Email' variant='outlined' onChange={handleChange} error={errors.email ? true : false} helperText={errors.email} />
					<TextField name='telefono' id='outlined-basic' label='Teléfono' variant='outlined' onChange={handleChange} error={errors.telefono ? true : false} helperText={errors.telefono} />
					<Button variant='contained' type='submit'>
						Finalizar compra
					</Button>
				</form>
			)}
		</>
	);
};

export default FormCheckout;
