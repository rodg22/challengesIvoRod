import * as React from "react";
import AbilityTableData from "./AbilityTableData";
import { useState, useEffect } from "react";
import axios from "axios";

 const AbilityTable = ({ abilities }) => {


  const [urlArrayAbilities, setUrlArrayAbilities] = useState([]);
  const [abilitiesData, setAbilitiesData] = useState([]);
  const [hiddenAbility, setHiddenAbility] = useState("");

  useEffect(() => {
    abilities?.map(({ ability: { url } }) => {
      setUrlArrayAbilities((urlArrayAbilities) => [...urlArrayAbilities, url]);
    });
  }, [abilities]);

  useEffect(() => {
    urlArrayAbilities?.map((url) => {
      axios
        .get(url)
        .then(({ data }) =>
          setAbilitiesData((abilitiesData) => [...abilitiesData, data])
        );
    });
  }, [urlArrayAbilities]);

 useEffect(() => {
 
   abilities.map((ability) => {
    return (
      ability.is_hidden && setHiddenAbility(ability.ability.name)
    )
   });
 }, [abilities])
  

  return (
    <AbilityTableData hiddenAbility={hiddenAbility} abilitiesData={abilitiesData}/>
  );
}

export default AbilityTable