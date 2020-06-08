import React, { useEffect, useState } from "react"
import "./App.css"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { makeStyles } from "@material-ui/core/styles"
import store from "./store/store"
import Layout from "./routes/Layout"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { Typography } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  load: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
}))

function App(props) {
  const classes = useStyles()
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setIsLoading(props.isLoading)
  })
  return (
    <>
      {isLoading ? (
        <Typography variant="h1">로딩중</Typography>
      ) : (
        <>
          <Provider store={store}>
            <BrowserRouter>
              <Layout />
            </BrowserRouter>
            <ToastContainer />
          </Provider>
        </>
      )}
    </>
  )
}

export default App
