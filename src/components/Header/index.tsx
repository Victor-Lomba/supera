import { Container } from "./styles";
import { useHistory } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

export const Header = () => {
	const history = useHistory();

	return (
		<Container>
			<button onClick={() => history.push("/")}>
				<h1>
					GAME<span>FIRE</span>
				</h1>
			</button>
			<button onClick={() => history.push("/cart")}>
				<FiShoppingCart color="white" size={24} />
			</button>
		</Container>
	);
};
