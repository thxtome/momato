import React from "react";
import { Switch, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Calendar from "../../containers/calendar/CalenderContainer";
import Tomatos from "../../routes/Tomatos";
import Template from "../../routes/Templates";
import Counter from "../../components/counter/Counter";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const ContentWrapper = () => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <Toolbar />
      <Switch>
        <Route exact path="/" component={Tomatos} />
        <Route path="/tomato" component={Tomatos} />
        <Route path="/calendar" component={Calendar} />
        <Route path="/template" component={Template} />
        <Route path="/counter" component={Counter} />
      </Switch>
    </main>
  );
};

export default ContentWrapper;
