/** @format */

import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavItem = styled(NavLink)`
	background-color: white;
	color: darkblue;
	text-decoration: none;
	transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
	border-radius: 5px;
	cursor: default;
	pointer-events: none;
`;

export const NavUserItem = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 5px;
	background-color: white;
	color: darkblue;
	text-decoration: none;
	transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
	padding: 7px 12px;
	border-radius: 5px;

	@media screen and (min-width: 768px) {
		font-size: 24px;
		font-weight: 600;

		gap: 20px;
		flex-direction: row;
	}
`;

export const NavMenu = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 50px;
	margin-bottom: 20px;
	padding: 6px 10px;
	border-bottom: 1px solid black;
	box-shadow: 0px 0px 5px 0px gray;
	font-size: 24px;
	font-weight: 600;
	color: darkblue;

	@media screen and (min-width: 768px) {
		font-size: 24px;
		font-weight: 600;
		padding: 12px 40px;
	}
`;

export const UserName = styled.p`
	margin: 0;
	padding: 0;
	font-size: 16px;
	font-weight: 500;
	color: darkblue;

	@media screen and (min-width: 768px) {
		font-size: 24px;
		font-weight: 600;
	}
`;

export const ButtonLogout = styled.button`
	font-size: 16px;
	font-weight: 500;

	@media screen and (min-width: 768px) {
		font-size: 24px;
		font-weight: 600;
	}
`;