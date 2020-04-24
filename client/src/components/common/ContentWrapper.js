import React from "react";
import { Switch, Route } from "react-router-dom";
import calendar from "../../routes/Calendar";
import tomato from "../../routes/Tomato";
import template from "../../routes/Template";
import css from "./ContentWrapper.css";

const ContentWrapper = () => {
  return (
    <div class="content">
      <Switch>
        <Route exact path="/" component={tomato} />
        <Route path="/tomato" component={tomato} />
        <Route path="/calendar" component={calendar} />
        <Route path="/template" component={template} />
      </Switch>
    </div>
  );
};

export default ContentWrapper;
