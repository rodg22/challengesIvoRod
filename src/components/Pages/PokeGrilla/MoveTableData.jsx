import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { colorTipos } from "../../../helper/colorTipos";

const MoveTableData = ({ orderedMoveData }) => {

  return (
    <>
      <div className="stat-table-container" style={{ marginTop: "20px" }}>
        <h1 style={{ marginTop: "20px", marginBottom: "20px" }}>Attacks</h1>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 320 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">LEVEL</TableCell>
                <TableCell align="center">NAME</TableCell>
                <TableCell align="center">TYPE</TableCell>
                <TableCell align="center">CAT.</TableCell>
                <TableCell align="center">POW.</TableCell>
                <TableCell align="center">ACC.</TableCell>
                <TableCell align="center">PP</TableCell>
                <TableCell align="center">L.METHOD</TableCell>
                <TableCell align="left">DESCRIPTION</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orderedMoveData?.map(({name, level, method, type, damage_class, power, accuracy, pp, effect_entries, effect_chance},index) => {
                return (
                  <TableRow
                    style={{ color: "black", width: `100%` }}
                    key={name + index}
                  >
                    <TableCell>
                            {level !== 0 ? level : '-'}
                    </TableCell>
                    <TableCell>
                      {name &&
                        name[0]?.toUpperCase() + name.substring(1)}
                    </TableCell>
                    <TableCell
                      style={{
                        backgroundColor: colorTipos(type.name),
                        width: 80,
                        color: "white",
                        fontWeight: "bold",
                      }}
                    >
                      {type.name &&
                        type.name[0]?.toUpperCase() +
                          type.name.substring(1)}
                    </TableCell>
                    <TableCell>{damage_class.name}</TableCell>
                    <TableCell>{power || "-"}</TableCell>
                    <TableCell>{accuracy || "-"}</TableCell>
                    <TableCell>{pp}</TableCell>
                    <TableCell>{method}</TableCell>
                    <TableCell>
                      {effect_entries[0] &&
                        effect_entries[0].short_effect.replace(
                          "$effect_chance",
                          effect_chance
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
