import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

//import Auth
import Auth from '../Pages/Auth'
import Login from "../Pages/Auth/Login";
import Signup from "../Pages/Auth/Signup";
import ResetPassword from "../Pages/Auth/ResetPassword";

import Main from '../Pages/Main'
import Home from "../Pages/Main/Home";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/auth" element={<Auth />}>
                    <Route path="login" element={<Login />} />
                    <Route path="signup" element={<Signup />} />
                    <Route path="reset-password" element={<ResetPassword />} />
                </Route>
                <Route path="/main" element={<Main />}>
                    <Route path="home" element={<Home />} />
                    
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router