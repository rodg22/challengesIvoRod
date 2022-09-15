import React from "react";
import "../components/Pages/RandomPokemon.css";

const Header = () => {
  return (
    <>
      <section className="icon-list">
        <i className="nes-squirtle"></i>
        <i className="nes-charmander"></i>
      </section>

      <h1>
        <span className="nes-text is-primary">Quién es este Pokemon?</span>
      </h1>
    </>
  );
};

export default Header;
