/** @format */

import styled from 'styled-components';
import { Field, Form } from 'formik';

export const FormBox = styled(Form)`
	display: flex;
	width: 375px;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	gap: ${p => p.theme.spacing(3)};
	padding-top: 10px;

	@media screen and (min-width: 768px) {
		width: 500px;
	}
`;

export const ButtonsContainer = styled.div`
	display: flex;
	gap: 10px;
	margin-left: auto;
	margin-right: auto;
	padding-top: 10px;
	padding-bottom: 20px;

	@media screen and (min-width: 768px) {
		gap: 24px;
	}
`;

export const ContactBox = styled.div`
	display: flex;
	gap: 10px;
	margin-bottom: 30px;
	margin-left: auto;
	margin-right: auto;

	@media screen and (min-width: 768px) {
		gap: 20px;
	}
`;

export const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 4px;
	cursor: inherit;
`;

export const ContactInput = styled(Field)`
	width: 205px;
	margin: 0;
	margin-right: auto;
	padding: ${p => p.theme.spacing(3)} ${p => p.theme.spacing(2)};
	font-size: 22px;
	color: darkblue;
	border: none;
	background-color: transparent;
	border-radius: 6px;
	cursor: inherit;

	&:focus {
		outline: 1px solid red;
	}
`;

export const Label = styled.label`
	display: flex;
	align-items: center;
	gap: 5px;
	width: 100%;
	font-size: 22px;
	font-weight: 600;
	border-radius: 6px;
	cursor: inherit;
`;

export const LabelName = styled.span`
	width: 85px;
	cursor: inherit;
`;

export const Avatar = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	width: 100px;
	height: 100px;
	font-size: 70px;
	border-radius: 50%;
	background-color: lightsteelblue;
`;

export const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		backgroundColor: 'oldlace',
		borderRadius: '8px',
	},
};
