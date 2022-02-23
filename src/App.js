import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

//pages
import Signup from "./Pages/Auth"

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App