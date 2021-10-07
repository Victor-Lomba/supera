import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	padding: 20px;
	position: relative;

	border-bottom: 1px solid rgba(0, 0, 0, 0.15);
	strong {
		color: var(--bright-red);
	}

	.cart-product-delete-button {
		background: transparent;
		border: none;
		position: absolute;
		right: 0;
		top: 25%;
		&:hover {
			cursor: pointer;
		}
	}
`;
