/** @format */

import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { register } from 'redux/auth/operations';
import {
	required,
	maxLength15,
	minLength2,
	minLength7,
	email,
	renderField,
} from 'components/Login/loginFieldCheck';

const RegisterForm = ({ handleSubmit, pristine, reset, submitting }) => {
	const dispatch = useDispatch();
	const cancelLogin = useRef(null);

	const submitForm = values => {
		if (!values.email && !values.password && !values.name) {
			return;
		}
		cancelLogin.current = dispatch(
			register({
				name: values.name,
				email: values.email,
				password: values.password,
			})
		);

		// reset();
	};

	return (
		<form
			onSubmit={e => {
				e.preventDefault();
				handleSubmit(submitForm)(e);
			}}
		>
			<Field
				name='name'
				type='text'
				component={renderField}
				label='Name'
				validate={[required, minLength2]}
			/>
			<Field
				name='email'
				type='email'
				component={renderField}
				label='Email'
				validate={[required, email]}
			/>
			<Field
				name='password'
				type='password'
				component={renderField}
				label='Password'
				validate={[required, maxLength15, minLength7]}
			/>
			<Field
				name='confirm_password'
				type='password'
				component={renderField}
				label='Confirm Password'
				validate={[required, maxLength15, minLength7]}
			/>
			<div>
				<button type='submit' disabled={pristine || submitting}>
					Submit
				</button>
				<button
					type='button'
					disabled={pristine || cancelLogin.current === null}
					onClick={() => cancelLogin.current?.abort()}
				>
					Cancel register
				</button>
				<button type='button' disabled={pristine || submitting} onClick={reset}>
					Clear Form
				</button>
			</div>
		</form>
	);
};

export default reduxForm({
	form: 'register',
})(RegisterForm);
