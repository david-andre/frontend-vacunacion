import React from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const dataHead = ["Nombre", "Lote", "Vac. Disponibles", "Num. Vacunas", "Vacuna"];
const LugaresTable = ({ users }) => {
  const tableContent = () => {
    return (
      users &&
      users.map((row) => (
        <TableRow
          key={row.nombre}
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        >
          <TableCell component="th" scope="row">
            {row.nombre}
          </TableCell>
          <TableCell>{row.lote}</TableCell>
          <TableCell>{row.num_vacunas}</TableCell>
          <TableCell>{row.vac_disponibles}</TableCell>
          <TableCell>{row.vacuna}</TableCell>
        </TableRow>
      ))
    );
  };

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            {dataHead.map((head) => {
              return <TableCell key={head}>{head}</TableCell>;
            })}
          </TableRow>
        </TableHead>
        <TableBody>{tableContent()}</TableBody>
      </Table>
    </TableContainer>
  );
};
export default LugaresTable;
