// import internal modules
import React from 'react';
import { Link, Outlet, Navigate } from 'react-router-dom';

// import external modules
import './index.css';

const Auth = () => {
  const auth = localStorage.getItem('token')
  if (auth) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/main" />;
  }
  return (
    <div className="min-vh-100 d-flex bg-right">
      <div className="bg-auth-left w-50">
        <div className="fs-3 ms-5 mt-5 fw-bold"><Link to={"/"} style={{ textDecoration: 'none', color: 'white' }}>Zwallet</Link></div>
        <div className="text-center auth-cover-app"><img src={require("../../assets/img/hp.svg").default} alt="banner-hp-auth" /></div>
        <div className="text-white text-bold fs-3 text-center my-3 fw-bold">App that Covering Banking Needs.</div>
        <div className="text-white text-bold text-start mx-5 my-5">Zwallet is an application that focussing in banking needs for all users<br />
        in the world. Always updated and always following world trends.<br />
        5000+ users registered in Zwallet everyday with worldwide users coverage.</div>
      </div>
      <div className="w-50">
        <Outlet />
      </div>
    </div>
  )
}

export default Auth