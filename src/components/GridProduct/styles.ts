import styled from "styled-components";

export const Container = styled.div`
	position: relative;
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	justify-content: center;
	height: 300px;

	box-shadow: 3px 3px rgba(0, 0, 0, 0.05);
	border: 1px solid rgba(0, 0, 0, 0.1);
	padding: 50px;
	border-radius: 0.25rem;
	transition: 0.2s;
	span {
		display: flex;
		justify-content: center;
		align-items: center;
		bottom: 20px;
		right: 20px;
		transition: 0.2s;
		position: absolute;
		padding: 12px 12px 12px 10px;
		border-radius: 50%;
		background: var(--green);
		transform-origin: center;
		border: 1px solid rgba(0, 0, 0, 0.2);
		&:hover {
			transform: scale(1.03);
			filter: brightness(1.1);
			cursor: pointer;
		}
	}

	&:hover {
		border: var(--bright-red) solid 1px;
	}

	strong {
		color: var(--bright-red);
	}
	img {
		margin: 0 auto;
		display: block;
		max-width: 200px;
		width: auto;
		height: auto;
	}
`;
