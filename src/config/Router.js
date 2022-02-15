// import internal modules
import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

// import external modules
import LandingPage from "../pages";
import Page404 from "../pages/404";

import Auth from "../pages/Auth";
import Login from "../pages/Auth/Login";
import SignUp from "../pages/Auth/SignUp";
import ForgotPassword from "../pages/Auth/ForgotPassword";
import ResetPassword from "../pages/Auth/ResetPassword";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/auth" element={<Auth />}>
                    <Route path="login" element={<Login />} />
                    <Route path="signup" element={<SignUp />} />
                    <Route path="forgot-password" element={<ForgotPassword />} />
                    <Route path="reset-password" element={<ResetPassword />} />
                    <Route index element={<Navigate to="/auth/login" />} />
                </Route>

                <Route path="/*" element={<Page404 />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router