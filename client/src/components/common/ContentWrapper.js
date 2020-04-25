import React from "react";
import { Switch, Route } from "react-router-dom";
import calendar from "../../routes/Calendar";
import tomatos from "../../routes/Tomatos";
import template from "../../routes/Template";
import css from "./ContentWrapper.css";
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Toolbar from "@material-ui/core/Toolbar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
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
      <Toolbar/>
      <Switch>
        <Route exact path="/" component={tomatos} />
        <Route path="/tomato" component={tomatos} />
        <Route path="/calendar" component={calendar} />
        <Route path="/template" component={template} />
      </Switch>
    </main>
  );
};

export default ContentWrapper;
