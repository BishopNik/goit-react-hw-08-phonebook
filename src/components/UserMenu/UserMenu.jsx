/** @format */

import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { animationButton } from '../Helpers';

import { NavItem, NavMenu, NavUserItem, UserItem, UserName, ButtonLogout } from './UserMenu.styled';

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
					<UserItem>
						Welcome, <UserName>{user.name}</UserName>
					</UserItem>
					<ButtonLogout
						type='button'
						onClick={e => {
							animationButton(e);
							dispatch(logOut());
						}}
					>
						Logout
					</ButtonLogout>
				</NavUserItem>
			</NavMenu>
		</>
	);
};
