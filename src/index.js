/** @format */

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import App from 'components/App';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'components/Helpers/GlobalStyle';
import { store, persistor } from './redux/store';
import 'modern-normalize';

const theme = {
	spacing: x => `${x * 4}px`,
};

ReactDOM.createRoot(document.getElementById('root')).render(
	// <React.StrictMode>
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<BrowserRouter basename='/goit-react-hw-08-phonebook'>
				<ThemeProvider theme={theme}>
					<App />
					<GlobalStyle />
				</ThemeProvider>
			</BrowserRouter>
		</PersistGate>
	</Provider>
	// </React.StrictMode>
);
