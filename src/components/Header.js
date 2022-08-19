import React from "react";
import "./RandomPokemon.css";

const Header = () => {
  return (
    <>
      <section className="icon-list">
        <i className="nes-squirtle"></i>
        <i className="nes-charmander"></i>
      </section>

      <h1>
        <span className="nes-text is-primary">Quien es este Pokemon?</span>
      </h1>
    </>
  );
};

export default Header;
