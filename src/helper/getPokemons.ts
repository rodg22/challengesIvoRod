import {Pokemon} from "./types";
import { POKEMON } from "./allPokemons";

const getPokemons = async (): Promise<Pokemon> => {
        const id =  Math.round(Math.random() * (POKEMON.length - 1) + 1);
        return {
        id: id,
        name: POKEMON[id - 1],
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
        };
    }

export default getPokemons;
