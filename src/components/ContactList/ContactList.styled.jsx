/** @format */

import styled from 'styled-components';

export const ContactsBox = styled.ul`
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
	justify-content: center;
	align-items: center;
	padding: 0;
`;

export const ContactContainer = styled.li`
	display: flex;
	align-items: center;
	padding: ${p => p.theme.spacing(6)};
	padding-top: ${p => p.theme.spacing(2)};
	outline: 1px solid lightgray;
	border-radius: 8px;

	@media screen and (max-width: 767px) {
		width: 97%;
	}

	@media screen and (min-width: 768px) and (max-width: 1279px) {
		width: calc((100% - 10px) / 2);
	}

	@media screen and (min-width: 1280px) {
		width: calc((100% - 20px) / 3);
	}
`;
