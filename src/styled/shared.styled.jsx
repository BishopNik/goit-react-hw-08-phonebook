/** @format */

import styled from 'styled-components';

export const Container = styled.div`
	padding: 0 30px;
	margin-left: auto;
	margin-right: auto;

	&:last-child {
		margin-bottom: 40px;
	}

	@media screen and (max-width: 767px) {
		width: 400px;
	}

	@media screen and (min-width: 768px) and (max-width: 1279px) {
		width: 768px;
		padding: 0 60px;
	}

	@media screen and (min-width: 1280px) {
		width: 1150px;
		padding: 0 90px;
	}
`;

export const Button = styled.button`
	border-radius: ${p => p.theme.spacing(2)};
	font-size: 22px;
	border: 1px solid rgba(0, 0, 0, 0.7);
	cursor: pointer;
	box-shadow: 0px 0px 4px 2px rgba(128, 128, 128, 0.5);
	transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
	min-width: 80px;
	height: 40px;

	&:hover {
		background-color: antiquewhite;
		transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
	}
`;

export const ButtonBox = styled.div`
	display: flex;
	justify-content: space-around;
	margin-top: 35px;
`;

export const FormBox = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 35px 15px;
	border-radius: 12px;
	border: 0.5px solid black;
	max-width: 400px;
	margin-left: auto;
	margin-right: auto;
`;
