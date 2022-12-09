import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./statTable.css";

const StatTable = ({ stats }) => {
  return (
    <>
      <div className="stat-table-container">
        <TableContainer component={Paper}>
                <h1 style={{width: '100%'}}>Stats</h1>
          <Table sx={{ minWidth: 320 }} aria-label="simple table">
            <TableHead>
              <TableRow>
              </TableRow>
              <TableRow>
                <TableCell align="center">HP</TableCell>
                <TableCell align="center">ATTACK</TableCell>
                <TableCell align="center">DEFENSE</TableCell>
                <TableCell align="center">S.ATTACK</TableCell>
                <TableCell align="center">S.DEFENSE</TableCell>
                <TableCell align="center">SPEED</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                {stats.map((stat) => {
                  return (
                    <TableCell
                      align="center"
                      key={stat.stat.name}
                      component="th"
                      scope="row"
                    >
                      {stat["base_stat"]}
                    </TableCell>
                  );
                })}
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default StatTable;
