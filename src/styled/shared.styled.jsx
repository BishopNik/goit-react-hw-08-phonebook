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
	}

	@media screen and (min-width: 1280px) {
		width: 1280px;
	}
`;
