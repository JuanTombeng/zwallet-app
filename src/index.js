import React from "react"
import ReactDOM from "react-dom"
import bootstrap from "bootstrap"
import App from "./App"
import "./index.css"

import { Provider } from "react-redux"
import { PersistedState } from "redux-persist/es/types"


ReactDOM.render(
    <App />
    ,
    document.getElementById('root')
)