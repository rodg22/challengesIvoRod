import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export const Tabla = ({ abilities }) => {

  return (
    <TableContainer sx={{ marginTop: 2 }} component={Paper}>
      <Table sx={{ minWidth: 320 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">{abilities.length > 2 ? 'Ability 1' : 'Ability'}</TableCell>
            {abilities.length > 2 && (
              <TableCell align="center"> Ability 2</TableCell>
            )}
            {abilities[abilities.length-1].is_hidden &&
            <TableCell align="center">Hidden Ability</TableCell>
            }
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            {abilities.map(({ability}) => (
                <TableCell align="center" key={ability.name} component="th" scope="row">
                {ability.name}
              </TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

