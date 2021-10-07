import styled from "styled-components";

export const Green = styled.span`
	color: var(--green);
	filter: brightness(0.8);
`;

export const Container = styled.div`
	display: flex;
	min-height: 50vh;
	padding: 20px 80px;

	.cart-products {
		width: 70%;
		display: flex;
		flex-direction: column;

		margin: 20px;
	}

	.cart-pannel {
		display: flex;
		height: fit-content;
		flex-direction: column;
		gap: 1.5rem;
		padding: 20px;
		width: 30%;
		border: 1px solid rgba(0, 0, 0, 0.1);
		box-shadow: 2px 2px rgba(0, 0, 0, 0.04);
	}
`;
