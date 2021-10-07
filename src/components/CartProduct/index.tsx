import { Container } from "./styles";
import { FiTrash } from "react-icons/fi";
import { CartContext } from "../../contexts/CartContext";
import { useContext, useState } from "react";
import { toast } from "react-hot-toast";

type CartProductProps = {
	name: string;
	price: number;
	image: string;
	score: number;
	id: number;
	quantity: number;
};

export const CartProduct = ({
	id,
	image,
	name,
	price,
	score,
	quantity,
}: CartProductProps) => {
	const { removeFromCart } = useContext(CartContext);

	const [currQuantity, setCurrQuantity] = useState(quantity);

	const handleRemoveProduct = () => {
		removeFromCart(id);
		setCurrQuantity(currQuantity - 1);
		toast.success("Removed from cart!", { position: "bottom-right" });
	};

	return (
		<Container>
			<img src={require(`../../assets/${image}`).default} alt="" />
			<div>
				<p>{name}</p>
				<strong>R$ {price.toFixed(2)}</strong>
				<p>Quantity: {currQuantity}</p>
			</div>
			<button className="cart-product-delete-button">
				<FiTrash
					color="var(--bright-red)"
					size={64}
					onClick={handleRemoveProduct}
				/>
			</button>
		</Container>
	);
};
