import {Pokemon} from "./types.ts";
import { POKEMON } from "./allPokemons";

const getPokemons = {
    random: async (): Promise<Pokemon> => {
        const id = Math.round(Math.random() * (POKEMON.length - 1) + 1);

        return {
        id: id,
        name: POKEMON[id - 1],
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
        };
    },
};

export default getPokemons;
