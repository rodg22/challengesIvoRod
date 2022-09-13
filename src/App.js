import Title from "./components/Title";
import { RandomPokemon } from "./components/RandomPokemon";
import { PokemonsApi } from "./components/PokemonsApi";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <Title />
      <RandomPokemon id={4} name={"charmander"} />
      {/* <PokemonsApi /> */}
    </>
  );
}

export default App;
