// import internal modules
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

// import external modules
import './navbar.css';
import { userContext } from '../../../context/UserContext';

const Navbar = ({openModal}) => {
    const {userName} = useContext(userContext);
    const {userPicture} = useContext(userContext);
    const {userEmail} = useContext(userContext);
    return (
        <nav className="h-20 bg-white rounded-bottom">
            <div className="container d-flex justify-content-between p-3">
                <div className="text-primary fw-bold fs-3"><Link to={"/main"} style={{ textDecoration: 'none' }}>Zwallet</Link></div>
                <div className="d-flex">
                    <img className="user-pointer rounded" src={userPicture} height={50} width={50} alt="pic-user-profile" />
                    <div className="d-flex flex-column ms-3 me-3">
                        <div className="fw-bold">{userName}</div>
                        <div>{userEmail}</div>
                    </div>
                    <div className="user-pointer mt-2" onClick={()=>openModal()}><img src={require("../../../assets/img/icons/bell_homepage.png")} alt="icon-bell-homepage" /></div>
                </div>
            </div>
        </nav>
    )
}
export default Navbar
