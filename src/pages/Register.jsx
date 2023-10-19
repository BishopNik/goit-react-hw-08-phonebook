/** @format */

import React from 'react';
import { useDispatch } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { register } from 'redux/auth/operations';

const RegisterForm = ({ handleSubmit, pristine, reset, submitting }) => {
	const dispatch = useDispatch();
	const submitForm = values => {
		dispatch(
			register({
				name: values.name,
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
			<div>
				<div>
					<label>Name</label>
					<div>
						<Field name='name' component='input' type='text' placeholder='Name' />
					</div>
				</div>
				<label>Email</label>
				<div>
					<Field name='email' component='input' type='email' placeholder='Email' />
				</div>
				<label>Password</label>
				<div>
					<Field
						name='password'
						component='input'
						type='password'
						placeholder='Password'
					/>
				</div>
				<label>Comfirm Password</label>
				<div>
					<Field
						name='confirm_password'
						component='input'
						type='password'
						placeholder='Password'
					/>
				</div>
			</div>
			<div>
				<button type='submit' disabled={pristine || submitting}>
					Submit
				</button>
				<button type='button' disabled={pristine || submitting} onClick={reset}>
					Cancel login
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