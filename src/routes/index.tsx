import { BrowserRouter, Route } from "react-router-dom";
import { Header } from "../components/Header";
import { Cart } from "../pages/Cart";
import { HomePage } from "../pages/HomePage";

export const Routes = () => {
	return (
		<BrowserRouter>
			<Header />
			<Route path="/" exact component={HomePage} />
			<Route path="/cart" component={Cart} />
		</BrowserRouter>
	);
};
