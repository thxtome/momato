import React, { useState } from "react";
import YearAndMonth from "../components/calendar/YearAndMonth";
import Dates from "../components/calendar/Dates";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";

const Calendar = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);

  const prevMonth = () => {
    if (month === 1) {
      setYear(year - 1);
      setMonth(12);
    } else setMonth(month - 1);
  };

  const nextMonth = () => {
    if (month === 12) {
      setYear(year + 1);
      setMonth(1);
    } else setMonth(month + 1);
  };

  const yearAndMonth = { year, month, prevMonth, nextMonth };

  return (
    <div>
      <Container maxWidth={"md"}>
        <Paper>
          <YearAndMonth {...yearAndMonth}></YearAndMonth>
          <Dates {...yearAndMonth}></Dates>
        </Paper>
      </Container>
    </div>
  );
};

export default Calendar;
