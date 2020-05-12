import React from "react"
import { Switch, Route } from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles"
import Toolbar from "@material-ui/core/Toolbar"
import CalenderContainer from "../../containers/calendar/CalenderContainer"
import Tomatos from "../../routes/Tomatos"
import Templates from "../../routes/Templates"
import CounterContainer from "../../containers/counter/CounterContainer"
import TemplateAddModal from "../template/TemplateAddModal"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}))

const ContentWrapper = () => {
  const classes = useStyles()
  return (
    <main className={classes.content}>
      <Toolbar />
      <Switch>
        <Route exact path="/" component={Tomatos} />
        <Route path="/tomato" component={Tomatos} />
        <Route path="/calendar" component={CalenderContainer} />
        <Route path="/template" component={Templates} />
        <Route path="/counter" component={CounterContainer} />
        <Route path="/addTemplate" component={TemplateAddModal} />
      </Switch>
    </main>
  )
}

export default ContentWrapper
