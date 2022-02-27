// import internal modules
import React, {useState} from 'react';
import { Navigate, Outlet } from 'react-router-dom';

// import external modules
import Footer from '../../components/module/Footer';
import Navbar from '../../components/module/Navbar';
import Sidebar from '../../components/module/Sidebar';
import Modal from '../../components/module/Modal';

const Main = () => {
  const auth = localStorage.getItem('token');
  const [showModal, setShowModal] = useState(true)

  const openModal = () => {
    if (showModal === false ) {
      setShowModal(true)
    } else {
      setShowModal(false)
    }
  }
  if (!auth) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/auth/login" />;
  }

  return (
    <div className="min-vh-100 bg-light">
      <Navbar openModal={openModal} />
      {showModal === true ? <Modal /> :''}
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