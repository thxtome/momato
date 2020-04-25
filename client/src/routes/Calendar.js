import React from "react";
import YearAndMonth from "../components/calendar/YearAndMonth";
import Dates from "../components/calendar/Dates";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";

const Calendar = () => {
  return (
    <div>
      <Container maxWidth={"md"}>
        <Paper>
          <YearAndMonth></YearAndMonth>
          <Dates></Dates>
        </Paper>
      </Container>
    </div>
  );
};

export default Calendar;
