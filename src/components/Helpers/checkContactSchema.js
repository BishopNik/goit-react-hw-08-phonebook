/** @format */

import * as yup from 'yup';

export const schema = yup.object({
	name: yup.string().min(2).required('Name is required'),
	number: yup
		.string()
		.matches(/^[\d-]+$/, 'Invalid phone number')
		.min(6, 'Number must be at least 6 digits')
		.max(13, 'Number must not exceed 13 digits')
		.required('Number is required'),
});
