import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { withStyles, makeStyles } from "@material-ui/core/styles";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    textAlign: "center",
    width: "20%",
  },
  body: {
    fontSize: 14,
    textAlign: "center",
    height: "80px",
    "&:hover": {
      opacity: 0.5,
    },
    width: "20%",
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  head: {
    backgroundColor: "white",
  },
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default,
    },
    display: "flex",
  },
}))(TableRow);

const rows = [
  [, , , 1, 2, 3, 4],
  [5, 6, 7, 8, 9, 10, 11],
  [12, 13, 14, 15, 16, 17, 18],
  [19, 20, 21, 22, 23, 24, 25],
  [26, 27, 28, 29, 30, 31],
  [, , , , , ,],
];

const useStyles = makeStyles((theme) => ({
  date: {
    width: "100%",
    height: "100%",
    textAlign: "start",
  },

  innerDate: {
    width: "100%",
    height: "100%",
    display: "flex",
  },

  thead: {
    display: "flex",
  },

  tomatoImg: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(1),
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
}));

const Dates = () => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow className={classes.thead}>
            <StyledTableCell>Sunday</StyledTableCell>
            <StyledTableCell>Monday</StyledTableCell>
            <StyledTableCell>Tuesday</StyledTableCell>
            <StyledTableCell>Wednesday</StyledTableCell>
            <StyledTableCell>Thursday</StyledTableCell>
            <StyledTableCell>Friday</StyledTableCell>
            <StyledTableCell>Saturday</StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              {row.map((date) => (
                <StyledTableCell component="td" scope="row">
                  <Box className={classes.date} component={"div"}>
                    {date}
                    {date == 5 || date == 14 ? (
                      <Box className={classes.innerDate}>
                        <Avatar
                          className={classes.tomatoImg}
                          src="/images/homeMade.png"
                        />
                        5
                      </Box>
                    ) : (
                      ""
                    )}
                  </Box>
                </StyledTableCell>
              ))}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Dates;
