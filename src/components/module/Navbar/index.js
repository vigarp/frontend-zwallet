// import internal modules
import React, { Fragment, useContext, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { decodeToken } from 'react-jwt';

// import external modules
import { userContext } from '../../../context/UserContext';
import { GetShortHistory } from '../../../redux/actions/shortHistory';
import socket from '../../../helpers/socket';
import './modal.css';
import './navbar.css';

const Navbar = () => {
    const tokenUser = localStorage.getItem("token");
    const userInfo = decodeToken(tokenUser);

    const { userName } = useContext(userContext);
    const { userPicture } = useContext(userContext);
    const { userEmail } = useContext(userContext);

    const dispatch = useDispatch();
    const [transferInfo, setTransferInfo] = useState([]);
    const [admInfo, setAdmInfo] = useState([]);

    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        socket.emit('user online', userInfo.id)
        dispatch((GetShortHistory()))        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    socket.on('sendInfo', (data) => {
        setAdmInfo(admInfo.concat(data))
    })
    socket.on('sendTransaction', (data) => {
        setTransferInfo(transferInfo.concat(data))
    })

    const openModal = () => {
        if (showModal === false) {
            setShowModal(true)
        } else {
            setShowModal(false)
        }
    }
    return (
        <Fragment>
            <nav className="h-20 bg-white rounded-bottom">
                <div className="container d-flex justify-content-between p-3">
                    <div className="text-primary fw-bold fs-3"><Link to={"/main"} style={{ textDecoration: 'none' }}>Zwallet</Link></div>
                    <div className="d-flex">
                        <img className="user-pointer rounded" src={userPicture} height={50} width={50} alt="pic-user-profile" />
                        <div className="d-flex flex-column ms-3 me-3">
                            <div className="fw-bold">{userName}</div>
                            <div>{userEmail}</div>
                        </div>
                        <div className="user-pointer mt-2" onClick={() => openModal()}><img src={require("../../../assets/img/icons/bell_homepage.png")} alt="icon-bell-homepage" /></div>
                    </div>
                </div>
            </nav>
            {showModal === true ? (
                <div className="bg-white rounded w-25 shadow modal-notif">
                    {/* nofikasi informasi */}
                    {admInfo.length !== 0 ? (<div className="text-muted text-start">Notification Information</div>) : (
                        <div className="text-center p-3">Your notification information is empty</div>
                    )}
                    {admInfo?.map((item, index) => (
                        <div className="d-flex" key={index}>
                            <img className="my-3" src={item.picture} width={50} height={50} alt="icon-globe-modal" />
                            <div className="d-flex flex-column ms-3 my-3">
                                <div className="text-muted text-start">{item.admin}</div>
                                <div className="fw-bold text-start">{item.message}</div>
                            </div>
                        </div>
                    ))}
                    {/* notifikasi transaksi */}
                    {transferInfo.length !== 0 ? (<div className="text-muted text-start">Notification Transaction</div>) : ''}
                    {transferInfo?.map((item, index) => (
                        <div className="d-flex" key={index}>
                            <img src={require("../../../assets/img/icons/arrowdown-modal.svg").default} alt="icon-arrows-modal" />
                            <div className="d-flex flex-column ms-3 my-3">
                                <div className="text-muted text-start">Transfer In From {item.sender}</div>
                                <div className="fw-bold text-muted text-start">{item.info}</div>
                                <div className="fw-bold text-start">Rp. {item.amount}</div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : ('')}

        </Fragment>
    )
}
export default Navbar
