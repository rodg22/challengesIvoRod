import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { colorTipos } from "../../../helper/colorTipos";

const MoveTableData = ({ moveData }) => {
    console.log(moveData)
  return (
    <>
      <div className="stat-table-container">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 320 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">NAME</TableCell>
                <TableCell align="center">TYPE</TableCell>
                <TableCell align="center">CAT.</TableCell>
                <TableCell align="center">POW.</TableCell>
                <TableCell align="center">ACC.</TableCell>
                <TableCell align="center">PP</TableCell>
                <TableCell align="left">DESCRIPTION</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {moveData?.map((move, index) => {
                return (
                  <TableRow
                    style={{ color: "black", width: `100%` }}
                    key={move.name + index}
                  >
                    <TableCell>
                      {move.name &&
                        move.name[0]?.toUpperCase() + move.name.substring(1)}
                    </TableCell>
                    <TableCell
                        style={{
                            backgroundColor: colorTipos(move.type.name),
                            width: 80,
                            color: "white",
                            fontWeight: "bold"
                          }}
                    >
                      {move.type.name &&
                        move.type.name[0]?.toUpperCase() +
                          move.type.name.substring(1)}
                    </TableCell>
                    <TableCell>{move.damage_class.name}</TableCell>
                    <TableCell>{move.power || "-"}</TableCell>
                    <TableCell>{move.accuracy || "-"}</TableCell>
                    <TableCell>{move.pp}</TableCell>
                    <TableCell>
                      {move.effect_entries[0] &&
                        move.effect_entries[0].short_effect.replace(
                          "$effect_chance",
                          move.effect_chance
                        )}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default MoveTableData;
