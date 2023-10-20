/** @format */

import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { logIn } from 'redux/auth/operations';

import {
	required,
	maxLength15,
	minLength7,
	email,
	renderField,
} from 'components/Login/loginFieldCheck';
import { Container } from 'styled/shared.styled';

const LoginForm = ({ handleSubmit, pristine, reset, submitting }) => {
	const dispatch = useDispatch();
	const cancelLogin = useRef(null);

	const submitForm = values => {
		if (!values.email && !values.password) {
			return;
		}
		cancelLogin.current = dispatch(
			logIn({
				email: values.email,
				password: values.password,
			})
		);

		// reset();
	};

	return (
		<Container>
			<form
				onSubmit={e => {
					e.preventDefault();
					handleSubmit(submitForm)(e);
				}}
			>
				<Field
					name='email'
					type='email'
					component={renderField}
					label='Login'
					placeholder='Enter email'
					validate={[required, email]}
				/>
				<Field
					name='password'
					type='password'
					component={renderField}
					label='Password'
					placeholder='Enter password'
					validate={[required, maxLength15, minLength7]}
				/>
				<div>
					<button type='submit' disabled={submitting}>
						Submit
					</button>
					<button
						type='button'
						disabled={pristine || cancelLogin.current === null}
						onClick={() => cancelLogin.current?.abort()}
					>
						❌
					</button>
					<button type='button' disabled={pristine || submitting} onClick={reset}>
						🗑️
					</button>
				</div>
			</form>
		</Container>
	);
};

export default reduxForm({
	form: 'login',
})(LoginForm);
