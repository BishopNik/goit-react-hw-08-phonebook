/** @format */

import { useEffect, useState } from 'react';
import { useDebounce } from 'react-use';
import { useSelector, useDispatch } from 'react-redux';
import Contact from '../Contact';
import { ContactContainer, ContactsBox } from './ContactList.styled';
import { filterState, contactsState } from 'redux/selectors';
import { fetchAllContacts } from 'redux/fetchApi';

function ContactList() {
	const dispatch = useDispatch();
	const filterValue = useSelector(filterState);
	const contacts = useSelector(contactsState);
	const [filteredContacts, setFilteredContacts] = useState([]);

	useDebounce(
		() => {
			const filtered = contacts
				? contacts
						.filter(contact =>
							contact.name.toLowerCase().includes(filterValue?.toLowerCase())
						)
						.reverse()
				: [];
			setFilteredContacts(filtered);
		},
		250,
		[contacts, filterValue]
	);

	useEffect(() => {
		dispatch(fetchAllContacts());
	}, [dispatch]);

	return (
		<ContactsBox>
			{filteredContacts?.map(({ id, name, number }) => (
				<ContactContainer key={id}>
					<Contact id={id} name={name} number={number} />
				</ContactContainer>
			))}
		</ContactsBox>
	);
}

export default ContactList;
