import { Container } from "./styles";
import { getGames, Games } from "../../services/api";
import { useEffect, useState } from "react";
import { GridProduct } from "../../components/GridProduct";

type Order = "price" | "score" | "A-Z";

export const HomePage = () => {
	const [games, setGames] = useState<Games[]>();
	const [order, setOrder] = useState<Order>("price");
	useEffect(() => {
		getGames().then(response => {
			setGames(response);
		});
	}, []);

	useEffect(() => {
		if (!games) return;
		let tempGames = [...games];
		switch (order) {
			case "score":
				setGames(
					tempGames.sort((A, B) => {
						if (A.score > B.score) return 1;
						if (A.score < B.score) return -1;
						return 0;
					})
				);
				break;
			case "price":
				setGames(
					tempGames.sort((A, B) => {
						if (A.price > B.price) return 1;
						if (A.price < B.price) return -1;
						return 0;
					})
				);
				break;
			case "A-Z":
				setGames(
					tempGames.sort((A, B) => {
						if (A.name > B.name) return 1;
						if (A.name < B.name) return -1;
						return 0;
					})
				);
				break;
		}
	}, [games, order]);

	return (
		<Container>
			<div className="grid-selector">
				<select
					name=""
					id=""
					onChange={e => {
						setOrder(e.target.value as Order);
					}}
				>
					<option value="price">Price</option>
					<option value="score">Score</option>
					<option value="A-Z">A-Z</option>
				</select>
			</div>
			<div className="product-grid">
				{games && games.map(game => <GridProduct {...game} />)}
			</div>
		</Container>
	);
};
