import React from "react";
import { CartContextProvider } from "./contexts/CartContext";
import { Routes } from "./routes";
import { Toaster } from "react-hot-toast";

const App = () => {
	return (
		<div className="App">
			<Toaster />
			<CartContextProvider>
				<Routes />
			</CartContextProvider>
		</div>
	);
};

export default App;
