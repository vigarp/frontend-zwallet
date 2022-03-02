// import internal modules
import React, { Fragment } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

// import external modules
import Footer from '../../components/module/Footer';
import Navbar from '../../components/module/Navbar';
import Sidebar from '../../components/module/Sidebar';

const Main = () => {
  const auth = localStorage.getItem('token');
  if (!auth) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/auth/login" />;
  }

  return (
    <Fragment>
      <Navbar />
      <div className="container d-flex min-vh-100">
        <Sidebar />
        <section className="flex-fill">
          <Outlet />
        </section>
      </div>
      <Footer />
    </Fragment> 
  )
}

export default Main