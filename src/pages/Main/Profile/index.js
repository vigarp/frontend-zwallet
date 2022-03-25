// import internal modules
import React, { Fragment, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { decodeToken } from 'react-jwt';
// import external modules
import { GetUserDetail } from '../../../redux/actions/user';
import { GetContacts } from '../../../redux/actions/contacts';
import ModalPic from '../../../components/module/ModalPic';
import './profile.css';

const Profile = () => {
  localStorage.removeItem('tempTransfer');
  const tokenUser = localStorage.getItem("token");
  const userInfo = decodeToken(tokenUser);
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const userDetailData = useSelector((state) => state.user);
  const contactsData = useSelector((state) => state.contacts);
  const [showModal, setShowModal] = useState(false);

  const openModal = (param) => {
    setShowModal(param)
  }

  useEffect(() => {
    dispatch((GetUserDetail()))
    dispatch((GetContacts()))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token')
    window.location.reload('/auth/login')
  }
  const contactsFiltered = contactsData.data.data?.filter(identity => identity.id !== userInfo.id)
  return (
    <Fragment>
      <main className="bg-white rounded g-0 p-4 d-flex flex-column align-items-center">
        <div className="upper mt-5">
          <img className="rounded" src={userDetailData.data?.picture} height={80} width={80} alt="pic-detail-user" />
          <div className="d-flex mt-3 user-pointer">
            <img className="ms-1" src={require("../../../assets/img/icons/edit-edit-profile-page.svg").default} alt="icon-edit-profile" />
            <div onClick={()=>openModal(true)} className="text-muted ms-3 mt-1">Edit</div>
          </div>
        </div>
        <div className="lower mt-3">
          <div className="fw-bold text-center">{userDetailData.data?.username}</div>
          <div className="text-muted text-center">{userDetailData.data?.phone}</div>
        </div>
      </main>
      <main className="row g-0 mt-3">
        <article className="bg-white rounded col me-1">
          <div className="d-flex flex-column align-items-center">
            <div className="bg-light px-5 py-3 my-3 w-75 rounded d-flex user-pointer">
              <div className="fw-bold flex-grow-1" onClick={() => navigate("/main/personal-information")} >Personal Information</div>
              <img src={require("../../../assets/img/icons/arrowright_profilepage.svg").default} alt="icon-arrowright-profilepage" />
            </div>
            <div className="bg-light px-5 py-3 my-3 w-75 rounded d-flex user-pointer">
              <div className="fw-bold flex-grow-1" onClick={() => navigate("/main/change-password")}>Change Password</div>
              <img src={require("../../../assets/img/icons/arrowright_profilepage.svg").default} alt="icon-arrowright-profilepage" />
            </div>
            <div className="bg-light px-5 py-3 my-3 w-75 rounded d-flex user-disabled">
              <div className="fw-bold flex-grow-1" /* onClick={() => navigate("/main/change-pin")} */ >Change PIN</div>
              <img src={require("../../../assets/img/icons/arrowright_profilepage.svg").default} alt="icon-arrowright-profilepage" />
            </div>
            <div className="bg-light px-5 py-3 my-3 w-75 rounded d-flex user-pointer">
              <div onClick={handleLogout} className="fw-bold flex-grow-1">Logout</div>
              <img src={require("../../../assets/img/icons/arrowright_profilepage.svg").default} alt="icon-arrowright-profilepage" />
            </div>
          </div>
        </article>
        <article className="bg-white rounded col ms-1">
          <div className="row g-0 p-3">
            <div className="col d-flex justify-content-start">
              <div className="fw-bold">Contacts Info</div>
            </div>
            <div className="col d-flex justify-content-end">
              <div className="text-decoration-none"><Link to={"/main/transfer"} style={{ textDecoration: 'none' }}>See All</Link></div>
            </div>
          </div>
          {contactsFiltered?.map((item, index) => (
          <div className="row g-0 me-3 my-4 user-pointer" key={index} onClick={() => navigate(`/main/transfer/${item.id}`)}>
            <div className="col flex-grow-0 px-3"><img className="rounded" src={item.picture} width={60} height={60} alt="pic-detail-user" /></div>
            <div className="col lh-lg">
              <div className="fw-bold">{item.username}</div>
              <div className="text-muted">{item.phone || item.email}</div>
            </div>
          </div>
          ))}
        </article>
      </main>
      {showModal === true ? <ModalPic openModal={openModal} /> : '' }
    </Fragment>
  )
}

export default Profile