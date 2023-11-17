/** @format */

// import React, { useRef } from 'react';
// import { useDispatch } from 'react-redux';
// import { Field, reduxForm } from 'redux-form';
// import { register } from 'redux/auth/operations';
// import {
// 	required,
// 	maxLength15,
// 	minLength2,
// 	minLength7,
// 	email,
// 	renderField,
// } from 'styled/loginFieldCheck';
// import { FormBox, ButtonBox, Button } from 'styled/shared.styled';
// import { toastWindow } from 'components/Helpers';

// const RegisterForm = ({ handleSubmit, pristine, reset, submitting }) => {
// 	const dispatch = useDispatch();
// 	const cancelLogin = useRef(null);

// 	const submitForm = values => {
// 		if (!values.email || !values.password || !values.name) {
// 			return;
// 		}
// 		cancelLogin.current = dispatch(
// 			register({
// 				name: values.name,
// 				email: values.email,
// 				password: values.password,
// 			})
// 		);

// 		// reset();
// 	};

// 	return (
// 		<FormBox
// 			onSubmit={e => {
// 				e.preventDefault();
// 				handleSubmit(submitForm)(e);
// 			}}
// 		>
// 			<Field
// 				name='name'
// 				type='text'
// 				component={renderField}
// 				label='Name'
// 				validate={[required, minLength2]}
// 			/>
// 			<Field
// 				name='email'
// 				type='email'
// 				component={renderField}
// 				label='Email'
// 				validate={[required, email]}
// 			/>
// 			<Field
// 				name='password'
// 				type='password'
// 				component={renderField}
// 				label='Password'
// 				validate={[required, maxLength15, minLength7]}
// 			/>
// 			<Field
// 				name='confirm_password'
// 				type='password'
// 				component={renderField}
// 				label='Confirm Password'
// 				validate={[required, maxLength15, minLength7]}
// 			/>
// 			<ButtonBox>
// 				<Button type='submit' disabled={pristine || submitting}>
// 					Register
// 				</Button>
// 				<Button
// 					type='button'
// 					disabled={pristine || cancelLogin.current === null}
// 					onClick={() => cancelLogin.current?.abort()}
// 				>
// 					❌
// 				</Button>
// 				<Button type='button' disabled={pristine || submitting} onClick={reset}>
// 					🗑️
// 				</Button>
// 			</ButtonBox>
// 		</FormBox>
// 	);
// };

// export default reduxForm({
// 	form: 'register',
// })(RegisterForm);

import React from 'react';
import { useDispatch } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { register } from 'redux/auth/operations';
import { toastWindow } from 'components/Helpers';

function Copyright(props) {
	return (
		<Typography variant='body2' color='text.secondary' align='center' {...props}>
			{'Copyright © '}
			<Link color='inherit' href='/goit-react-hw-08-phonebook/'>
				My Phonebook
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

const defaultTheme = createTheme();

const RegisterForm = () => {
	const dispatch = useDispatch();

	const submitForm = values => {
		if (!values.email || !values.password || !values.name) {
			toastWindow('Please fill out all fields');
			return;
		}
		if (values.password !== values.сonfirm_password) {
			toastWindow("Passwords don't match");
			return;
		}
		dispatch(
			register({
				name: values.name,
				email: values.email,
				password: values.password,
			})
		);
	};
	const handleSubmit = event => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		submitForm({
			name: data.get('name'),
			email: data.get('email'),
			password: data.get('password'),
			сonfirm_password: data.get('сonfirm_password'),
		});
	};

	return (
		<ThemeProvider theme={defaultTheme}>
			<Container component='main' maxWidth='xs'>
				<CssBaseline />
				<Box
					sx={{
						marginTop: 8,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component='h1' variant='h5'>
						Create account
					</Typography>
					<Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
						<TextField
							margin='normal'
							required
							fullWidth
							id='text'
							label='Name'
							name='name'
							autoComplete='name'
							autoFocus
						/>
						<TextField
							margin='normal'
							required
							fullWidth
							id='email'
							label='Email Address'
							name='email'
							autoComplete='email'
						/>
						<TextField
							margin='normal'
							required
							fullWidth
							name='password'
							label='Password'
							type='password'
							id='password'
							autoComplete='current-password'
						/>
						<TextField
							margin='normal'
							required
							fullWidth
							name='сonfirm_password'
							label='Сonfirm Password'
							type='password'
							id='сonfirm_password'
							autoComplete='current-password'
						/>
						<Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
							Sign up
						</Button>
						<Grid container>
							<Grid item>
								<Link href='login' variant='body2'>
									{'Do have you an account? Sign In'}
								</Link>
							</Grid>
						</Grid>
					</Box>
				</Box>
				<Copyright sx={{ mt: 8, mb: 4 }} />
			</Container>
		</ThemeProvider>
	);
};

export default RegisterForm;
