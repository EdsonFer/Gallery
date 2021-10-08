import styled from 'styled-components';
import { darken, transparentize } from 'polished';

export const Container = styled.div`
	min-height: 100vh;
	color: var(--color);
`;

export const Area = styled.div`
	margin: 0 auto;
	max-width: 980px;
	padding: 1.875rem 0;

	h1 {
		text-align: center;
		margin-bottom: 1.875rem;
	}
`;

export const ScreenWarning = styled.div`
	text-align: center;

	.emoji {
		font-size: 3.125rem;
		margin-bottom: 1.25rem;
	}
`;

export const PhotoList = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 0.625rem;

	@media (max-width: 768px) {
		grid-template-columns: repeat(2, 1fr);
		justify-items: center;
	}

	@media (max-width: 380px) {
		grid-template-columns: 1fr;
		justify-items: center;
	}
`;

export const UploadForm = styled.form`
	background-color: #3d3f43;
	padding: 1rem;
	border-radius: 0.625rem;
	margin-bottom: 1.875rem;

	input[type='submit'] {
		background-color: #756df4;
		border: 0;
		color: #fff;
		padding: 0.5rem 1rem;
		font-size: 1rem;
		border-radius: 0.625rem;
		margin: 0 1.25rem;
		cursor: pointer;

		&:hover {
			background-color: ${darken(0.1, '#756df4')};
		}
	}
`;
