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
import Welcome from "../Pages/Main/Welcome";
import Home from "../Pages/Main/Home";
import Profile from "../Pages/Main/Profile";
import Personal from "../Pages/Main/Profile/Personal";
import ManagePhone from "../Pages/Main/Profile/ManagePhone";
import NewPhone from "../Pages/Main/Profile/NewPhone";
import ChangePassword from "../Pages/Main/Profile/ChangePassword";
import ChangePin from "../Pages/Main/Profile/ChangePin";
import TopUp from "../Pages/Main/Transaction/TopUp";
import TransferInput from "../Pages/Main/Transaction/TransferInput";
import TransferConfirmation from "../Pages/Main/Transaction/TransferConfirmation";
import TransactionStatus from "../Pages/Main/Transaction/TransactionStatus";
import LandingPage from "../Pages";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/auth" element={<Auth />}>
                    <Route path="login" element={<Login />} />
                    <Route path="signup" element={<Signup />} />
                    <Route path="reset-password" element={<ResetPassword />} />
                </Route>
                <Route path="/welcome" element={<Welcome />} />
                <Route path="/main" element={<Main />}>
                    <Route path="home" element={<Home />} />
                    <Route path="history" element={<TransactionHistory />} />
                    <Route path="topup" element={<TopUp />} />
                    <Route path="transfer" element={<Transfer />} />
                    <Route path="transfer-input/:id" element={<TransferInput />} />
                    <Route path="transfer-confirmation/:id" element={<TransferConfirmation />} />
                    <Route path="transfer-status/:id" element={<TransactionStatus />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="personal-information" element={<Personal />} />
                    <Route path="change-password" element={<ChangePassword />} />
                    <Route path="change-pin" element={<ChangePin />} />
                    <Route path="manage-phone" element={<ManagePhone />} />
                    <Route path="new-phone" element={<NewPhone />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router