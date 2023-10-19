/** @format */

import { Toaster } from 'react-hot-toast';
import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import { Routes, Route } from 'react-router-dom';
import { useAuth } from 'hooks';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import SharedLayout from './SharedLayout';
import Loader from 'components/Loader';

const Phonebook = lazy(() => import('pages/Phonebook'));
const Login = lazy(() => import('pages/Login'));
const Register = lazy(() => import('pages/Register'));

function App() {
	const dispatch = useDispatch();
	const { isRefreshing } = useAuth();

	useEffect(() => {
		dispatch(refreshUser());
	}, [dispatch]);

	return isRefreshing ? (
		<Loader />
	) : (
		<>
			<Routes>
				<Route path='/' element={<SharedLayout />}>
					<Route
						path='/phonebook'
						element={<PrivateRoute redirectTo='/login' component={<Phonebook />} />}
					/>
					<Route index element={<Login />} />
					<Route
						path='/register'
						element={
							<RestrictedRoute redirectTo='/phonebook' component={<Register />} />
						}
					/>
					<Route
						path='/login'
						element={<RestrictedRoute redirectTo='/phonebook' component={<Login />} />}
					/>
				</Route>
			</Routes>
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
		</>
	);
}

export default App;
