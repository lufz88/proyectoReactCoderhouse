import { TextField } from '@mui/material';
import React from 'react';

const FormCheckout = () => {
	return (
		<form>
			<TextField name='nombre' id='outlined-basic' label='Nombre' variant='outlined' />
			<TextField name='email' id='outlined-basic' label='Email' variant='outlined' />
			<TextField name='telefono' id='outlined-basic' label='Teléfono' variant='outlined' />
		</form>
	);
};

export default FormCheckout;
