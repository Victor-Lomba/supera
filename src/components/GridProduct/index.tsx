import { Container } from "./styles";
import { FiShoppingCart } from "react-icons/fi";
import { MouseEvent, useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { toast } from "react-hot-toast";

type GridProductProps = {
	name: string;
	price: number;
	image: string;
	score: number;
	id: number;
};

export const GridProduct = ({
	name,
	id,
	image,
	score,
	price,
}: GridProductProps) => {
	const { addToCart } = useContext(CartContext);

	const handleBuyClick = (e: MouseEvent<HTMLSpanElement>) => {
		e.stopPropagation();
		toast.success("Added to cart!", { position: "bottom-right" });
		addToCart(id);
	};

	return (
		<Container>
			<img src={require(`../../assets/${image}`).default} alt="" />
			<div>
				<p>{name}</p>
				<strong>R$ {price.toFixed(2)}</strong>
			</div>
			<span onClick={handleBuyClick}>
				<FiShoppingCart color="white" size={24} />
			</span>
		</Container>
	);
};
