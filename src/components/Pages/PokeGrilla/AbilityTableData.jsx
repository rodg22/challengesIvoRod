import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";


const AbilityTableData = ({ hiddenAbility, abilitiesData }) => {

  return (
    <TableContainer sx={{ marginTop: 2 }} component={Paper}>
      <Table sx={{ minWidth: 320 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Abilities</TableCell>
            <TableCell>Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {abilitiesData.map(({ name, effect_entries }) => {
            return (
              <TableRow key={name}>
                <TableCell
                  style={{ width: "150px", position: "relative" }}
                  align="center"
                  component="th"
                  scope="row"
                >
                  {name && name[0].toUpperCase() + name.substring(1)}

                  {
                    hiddenAbility === name &&
                  <FontAwesomeIcon
                    style={{ position: "absolute", top: "10", left: "10" }}
                    icon={faStar}
                  />
                  }
                </TableCell>
                <TableCell align="left" component="th" scope="row">
                  {effect_entries.map((effect) => {
                    return effect.language.name === "en" && effect.short_effect;
                  })}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AbilityTableData;
