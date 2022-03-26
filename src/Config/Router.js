import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

//import Auth
import Auth from '../Pages/Auth'
import Login from "../Pages/Auth/Login";
import Signup from "../Pages/Auth/Signup";
import ResetPassword from "../Pages/Auth/ResetPassword";
import TransactionHistory from "../Pages/Main/Transaction/TransactionHistory";
import Transfer from "../Pages/Main/Transaction/Transfer";

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
                    <Route path="history" element={<TransactionHistory />} />
                    <Route path="transfer" element={<Transfer />} />
                    
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router