/** @format */

import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { statusError } from 'redux/contacts/selectors';
import { resetError } from 'redux/contacts/contactsSlice';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import ContactForm from 'components/ContactForm';
import { TitleName, FormBox } from './App.styled';
import { Container } from 'styled/shared.styled';
import { toastWindow } from 'components/Helpers';

function Phonebook() {
	const error = useSelector(statusError);
	const dispatch = useDispatch();

	useEffect(() => {
		if (error !== null) toastWindow(`Error loading contacts: ${error}`);
		dispatch(resetError());
	}, [dispatch, error]);

	return (
		<Container>
			<FormBox>
				<TitleName>Phonebook</TitleName>
				<ContactForm />
			</FormBox>
			<FormBox>
				<TitleName>Contacts</TitleName>
			</FormBox>

			<Filter />

			<ContactList />

			<Toaster
				position='top-right'
				reverseOrder={false}
				gutter={8}
				toastOptions={{
					duration: 5000,
					style: {
						background: '#fdfbea',
						color: '#000000',
					},
				}}
			/>
		</Container>
	);
}

export default Phonebook;
