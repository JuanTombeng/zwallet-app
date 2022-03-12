import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

//import Auth
import Auth from '../Pages/Auth'

import Main from '../Pages/Main'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/auth" element={<Auth />}>

                </Route>
                <Route path="/main" element={<Main />}>
                    
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router