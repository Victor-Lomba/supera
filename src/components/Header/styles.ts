import styled from "styled-components";

export const Container = styled.div`
	background: var(--dark-red);
	box-shadow: 0 3px rgba(0, 0, 0, 0.1);
	display: flex;
	justify-content: space-between;
	padding: 20px 50px;
	button {
		border: none;
		background: transparent;

		&:hover {
			cursor: pointer;
		}
	}
	h1 {
		font-family: "Bebas Neue", sans-serif;
		color: white;
		span {
			font-family: "Bebas Neue", sans-serif;
			color: var(--orange);
		}
	}
`;
