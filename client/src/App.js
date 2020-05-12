import React from "react"
import "./App.css"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import store from "./store/store"
import Layout from "./routes/Layout"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
      <ToastContainer />
    </Provider>
  )
}

export default App
