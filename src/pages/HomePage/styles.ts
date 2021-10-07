import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	height: 100%;

	.product-grid {
		display: grid;
		padding: 20px 100px;
		margin: 0 auto;
		align-items: center;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
	}

	.grid-selector {
		width: 100%;
		display: flex;
		justify-content: flex-end;
		padding: 20px;
		> select {
			border: 1px solid var(--bright-red);
			padding: 5px;
			margin-right: 80px;
			border-radius: 0.25rem;
			outline: none;
		}
	}
`;
