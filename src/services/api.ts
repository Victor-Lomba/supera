// Mock API

import products from "./products.json";

export type Games = {
	id: number;
	name: string;
	price: number;
	score: number;
	image: string;
};

export const getGames = (): Promise<Games[]> => {
	return new Promise(resolve => {
		resolve(products);
	});
};
