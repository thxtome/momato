import React from "react";
import Box from "@material-ui/core/Box";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

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
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: theme.spacing(0.5),
  },

  thead: {
    display: "flex",
  },

  tomatoImg: {
    width: "35%",
    height: "auto",
    marginRight: theme.spacing(0.5),
  },

  thMoblie: {
    padding: "3px",
  },

  tdMoblie: {
    padding: "3px",
    height: "50px",
  },

  dateFontMobile: {
    fontSize: "0.5rem",
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
    dates[parseInt(ele.date) + firstDay - 1] = {
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
  const matches = useMediaQuery("(min-width:700px)");

  let dayOfTheWeek = matches
    ? [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ]
    : ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow className={classes.thead}>
            {dayOfTheWeek.map((day, index) => (
              <StyledTableCell
                className={matches ? "" : classes.thMoblie}
                key={index}
              >
                {day}
              </StyledTableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row, index) => (
            <StyledTableRow key={index}>
              {row.map((dateInfo, index) => (
                <StyledTableCell
                  className={matches ? "" : classes.tdMoblie}
                  key={index}
                  component="td"
                  scope="row"
                >
                  <Box
                    className={
                      matches
                        ? `${classes.date}`
                        : `${classes.date} ${classes.dateFontMobile}`
                    }
                    component={"div"}
                  >
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
