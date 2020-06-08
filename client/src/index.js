import React, { useContext } from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import * as serviceWorker from "./serviceWorker"

ReactDOM.render(<App isLoading={false} />, document.getElementById("root"))
serviceWorker.register()
