import Header from "./components/Header";
import { RandomPokemon } from "./components/RandomPokemon";

function App() {
  return (
    <>
      <Header />
      <RandomPokemon id={4} name={"charmander"} />
    </>
  );
}

export default App;
