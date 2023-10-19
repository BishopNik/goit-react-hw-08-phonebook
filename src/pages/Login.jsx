/** @format */

import React from 'react';
import { useDispatch } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { logIn } from 'redux/auth/operations';

const required = value => (value || typeof value === 'number' ? undefined : 'Required');
const maxLength = max => value =>
	value && value.length > max ? `Must be ${max} characters or less` : undefined;
const maxLength15 = maxLength(15);
const minLength = min => value =>
	value && value.length < min ? `Must be ${min} characters or more` : undefined;
const minLength2 = minLength(2);
const email = value =>
	value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
		? 'Invalid email address'
		: undefined;

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
	<div>
		<label>{label}</label>
		<div>
			<input {...input} placeholder={label} type={type} />
			{touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
		</div>
	</div>
);

const LoginForm = ({ handleSubmit, pristine, reset, submitting }) => {
	const dispatch = useDispatch();
	const submitForm = values => {
		dispatch(
			logIn({
				email: values.email,
				password: values.password,
			})
		);

		reset();
	};

	return (
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
				label='Email'
				validate={[required, email]}
			/>
			<Field
				name='password'
				type='password'
				component={renderField}
				label='Password'
				validate={[required, maxLength15, minLength2]}
			/>
			<div>
				<button type='submit' disabled={submitting}>
					Submit
				</button>
				<button type='button' disabled={pristine || submitting} onClick={reset}>
					Cancel login
				</button>
				<button type='button' disabled={pristine || submitting} onClick={reset}>
					Clear Values
				</button>
			</div>
		</form>
	);
};

export default reduxForm({
	form: 'login',
})(LoginForm);
