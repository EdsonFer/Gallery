import styled from 'styled-components';

export const Container = styled.div`
	background-color: #3d3f43;
	border-radius: 0.625rem;
	padding: 0.625rem;

	display: flex;
	flex-direction: column;
	flex-wrap: wrap;

	img {
		width: 20rem;
		height: 10rem;
		max-width: 100%;
		max-height: 100%;
		display: block;
		margin-bottom: 0.625rem;
		border-radius: 0.625rem;
	}

	button {
		display: block;
		background-color: #756df4;
		border: 0;
		color: #fff;
		padding: 0.5rem 1rem;
		font-size: 1rem;
		border-radius: 0.625rem;
		margin: 0.625rem, auto 0 auto;
		cursor: pointer;
		&:hover {
			opacity: 0.9;
		}
	}
`;
