import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './index.css';

const Auth = () => {
  return (
    <div className="min-vh-100 d-flex bg-light">
      <div className="bg-auth-left w-50">
        <div className="fs-3 ms-5 mt-5 fw-bold"><Link to={"/auth/login"} style={{ textDecoration: 'none', color: 'white' }}>Zwallet</Link></div>
        <div className="text-center"><img src={require("../../assets/img/hp.svg").default} alt="banner-hp-auth" /></div>
        <div className="text-white text-bold fs-3 text-center my-3 fw-bold">App that Covering Banking Needs.</div>
        <div className="text-white text-bold text-start mx-5 my-5">Zwallet is an application that focussing in banking needs for all users<br />in the world. Always updated and always following world trends.<br />5000+ users registered in Zwallet everyday with worldwide users coverage.</div>
      </div>
      <div className="w-50">
        <Outlet />
      </div>
    </div>
  )
}

export default Auth