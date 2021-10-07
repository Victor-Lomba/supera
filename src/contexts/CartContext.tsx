import { createContext, ReactNode, useEffect, useState } from "react";

import { Games, getGames } from "../services/api";

type Cart = { id: number; quantity: number };
type CartContextProps = {
	addToCart: (id: number, quantity?: number) => boolean;
	removeFromCart: (id: number, quantity?: number) => boolean;
	cart: Cart[];
	gameList: Games[];
	totalPrice: number;
};

export const CartContext = createContext({} as CartContextProps);

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
	const [gameList, setGameList] = useState<Games[]>([]);
	const [totalPrice, setTotalPrice] = useState(0);

	const gameListInitialization = async () => {
		setGameList(await getGames());
	};

	useEffect(() => {
		gameListInitialization();
	});
	const [cart, setCart] = useState<Cart[]>([]);

	useEffect(() => {
		let currPrice = 0;

		gameList.forEach(game => {
			const current = cart.find(x => x.id === game.id);
			if (current) currPrice += game.price * current?.quantity;
		});
		setTotalPrice(currPrice);
	}, [cart, gameList]);
	const addToCart = (id: number, quantity = 1): boolean => {
		const found = cart.find(x => x.id === id);
		let tempCart = [...cart];

		if (found) {
			tempCart[tempCart.indexOf(found)] = {
				...found,
				quantity: found.quantity + 1,
			};
		} else {
			tempCart.push({ id: id, quantity: quantity });
		}

		setCart([...tempCart]);

		return true;
	};

	const removeFromCart = (id: number, quantity = 1): boolean => {
		const found = cart.find(x => x.id === id);
		if (!found) return false;
		let tempCart = [...cart];

		if (found.quantity > quantity) {
			tempCart[tempCart.indexOf(found)].quantity -= quantity;
		} else {
			console.log(tempCart);
			let index = tempCart.indexOf(found);
			tempCart.splice(index, 1);
			console.log(tempCart);
		}

		setCart([...tempCart]);
		return true;
	};

	return (
		<CartContext.Provider
			value={{ cart, addToCart, removeFromCart, gameList, totalPrice }}
		>
			{children}
		</CartContext.Provider>
	);
};
