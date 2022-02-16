// import internal modules
import React, { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

// import external modules
import Footer from '../../components/module/Footer';
import Navbar from '../../components/module/Navbar';
import Sidebar from '../../components/module/Sidebar';

const Main = () => {
  return (
    <div className="min-vh-100 bg-light">
      <Navbar />
      <div className="d-flex px-5 my-5 min-vh-100">
        <Sidebar />
        <div className="bg-transparent border-rounded w-100 ms-5">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Main