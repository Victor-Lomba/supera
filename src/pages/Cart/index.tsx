import { useContext, useEffect, useState } from "react";
import { CartProduct } from "../../components/CartProduct";
import { CartContext } from "../../contexts/CartContext";
import { Container, Green } from "./styles";

export const Cart = () => {
	const { cart, gameList, totalPrice } = useContext(CartContext);
	const [gameQuantity, setGameQuantity] = useState(0);

	useEffect(() => {
		let quantityTotal = 0;
		cart.forEach(game => {
			const current = gameList.find(x => x.id === game.id);
			if (current) {
				quantityTotal += game.quantity;
			}
		});
		setGameQuantity(quantityTotal);
	}, [cart, gameList]);

	return (
		<Container>
			<div className="cart-products">
				{cart.map(product => {
					const current = gameList.find(x => x.id === product.id);
					if (!current) return <></>;
					return <CartProduct {...current} {...product} key={product.id} />;
				})}
			</div>
			<div className="cart-pannel">
				<h2>Summary</h2>
				<p>
					Price: <strong>R$: {totalPrice.toFixed(2)}</strong>
				</p>
				<p>
					Shipping:{" "}
					{totalPrice > 250 ? (
						<Green> FREE</Green>
					) : (
						<strong>{`R$: ${(gameQuantity * 10).toFixed(2)}`}</strong>
					)}
				</p>
				<p>
					Total:{" "}
					<strong>
						R$:{" "}
						{(totalPrice > 250
							? totalPrice
							: gameQuantity * 10 + totalPrice
						).toFixed(2)}
					</strong>
				</p>
			</div>
		</Container>
	);
};
