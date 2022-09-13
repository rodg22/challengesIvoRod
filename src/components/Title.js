import React from "react";
import "./RandomPokemon.css";

const Title = () => {
  return (
    <>
      <section className="icon-list">
        <i className="nes-squirtle"></i>
        <i className="nes-charmander"></i>
        <i className="nes-bulbasaur"></i>
      </section>

      <h1>
        <span className="nes-text is-primary">Quién es este Pokemon?</span>
      </h1>
    </>
  );
};

export default Title;
