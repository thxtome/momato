import React, { useState, useEffect } from "react";
import YearAndMonth from "../components/calendar/YearAndMonth";
import Dates from "../components/calendar/Dates";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";

const calMonth = (year, month) => {
  let nextYear = year;
  let nextMonth = month;
  if (month === 0) {
    nextYear = year - 1;
    nextMonth = 12;
  } else if (month === 13) {
    nextYear = year + 1;
    nextMonth = 1;
  }
  return { nextYear, nextMonth };
};

const Calendar = (props) => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [tomatoOfDates, setTomatoOfDates] = useState([]);

  const prevMonth = () => {
    const { nextYear, nextMonth } = calMonth(year, month - 1);
    setYear(nextYear);
    setMonth(nextMonth);
    setTomatoOfDates([]);
    props.getTomatoCntOfDate({ year: nextYear, month: nextMonth });
  };

  const nextMonth = () => {
    const { nextYear, nextMonth } = calMonth(year, month + 1);
    setYear(nextYear);
    setMonth(nextMonth);
    setTomatoOfDates([]);
    props.getTomatoCntOfDate({ year: nextYear, month: nextMonth });
  };

  useEffect(() => {
    if (props.calendarReducer.isUpdated) {
      setTomatoOfDates(props.calendarReducer.tomatoOfDates);
      props.clearUpdated();
    }
  },[props]);

  useEffect(() => {
    props.getTomatoCntOfDate({ year, month });
  }, []);

  const yearAndMonth = { year, month, prevMonth, nextMonth, tomatoOfDates };

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
