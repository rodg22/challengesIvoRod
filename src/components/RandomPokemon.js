import getPokemons from "../helper/getPokemons.ts";

const RandomPokemon = () => {
  getPokemons().then((data) => console.log(data));

  return (
    <>
      <div>{/* <img src={} alt={} /> */}</div>
    </>
  );
};

export default RandomPokemon;
