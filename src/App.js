import React, { Fragment } from "react"
import Router from "./Config/Router"
import ContextWrapper from "./Context/userContext"

const App = () => {
    return (
        <ContextWrapper>
            <Fragment>
                <Router />
            </Fragment>
        </ContextWrapper>
    )
}

export default App