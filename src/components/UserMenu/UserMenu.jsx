/** @format */

import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { NavItem, NavMenu, NavUserItem, UserName, ButtonLogout } from './UserMenu.styled';

export const UserMenu = () => {
	const dispatch = useDispatch();
	const { user } = useAuth();

	return (
		<>
			<NavMenu>
				<NavItem to='/phonebook' end>
					Phonebook
				</NavItem>
				<NavUserItem>
					<UserName>Welcome, {user.name}</UserName>
					<ButtonLogout type='button' onClick={() => dispatch(logOut())}>
						Logout
					</ButtonLogout>
				</NavUserItem>
			</NavMenu>
		</>
	);
};
