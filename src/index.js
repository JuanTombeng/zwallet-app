import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import 'bootstrap/dist/css/bootstrap.css'
import "./index.css"

import { Provider } from "react-redux"
import { PersistedState } from "redux-persist/es/types"


ReactDOM.render(
    <App />
    ,
    document.getElementById('root')
)