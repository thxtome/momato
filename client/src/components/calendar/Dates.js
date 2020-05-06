import React from "react";
import Box from "@material-ui/core/Box";
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

//날짜를 삽입
const fillDate = (year, month, tomatoOfDates = []) => {
  const dates = [];

  const firstDay = new Date(year, month - 1, 1).getDay();
  const lastDate = new Date(year, month, 0).getDate() - 1;

  //날짜를 채움
  for (let i = firstDay; i <= lastDate + firstDay; i++) {
    let dateInfo = { date: i - firstDay + 1 };
    dates[i] = dateInfo;
  }

  //토마토를 채움
  tomatoOfDates.forEach((ele) => {
    dates[parseInt(ele.date) + firstDay] = {
      date: parseInt(ele.date),
      tomatoCnt: ele.tomatoCnt,
    };
  });

  return dates;
};

//채운 날짜를 row형식에 맞게 삽입
const createRows = (dates) => {
  const rows = [];

  for (let i = 0; i < 6; i++) {
    rows[i] = [
      dates[7 * i],
      dates[7 * i + 1],
      dates[7 * i + 2],
      dates[7 * i + 3],
      dates[7 * i + 4],
      dates[7 * i + 5],
      dates[7 * i + 6],
    ];
  }

  return rows;
};

const Dates = (props) => {
  const classes = useStyles();
  const dates = fillDate(props.year, props.month, props.tomatoOfDates);
  const rows = createRows(dates);

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
          {rows.map((row, index) => (
            <StyledTableRow key={index}>
              {row.map((dateInfo, index) => (
                <StyledTableCell key={index} component="td" scope="row">
                  <Box className={classes.date} component={"div"}>
                    {dateInfo ? dateInfo.date : ""}
                    {dateInfo && dateInfo.tomatoCnt ? (
                      <Box className={classes.innerDate}>
                        <Avatar
                          className={classes.tomatoImg}
                          src="/images/homeMade.png"
                        />
                        {dateInfo.tomatoCnt}
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
