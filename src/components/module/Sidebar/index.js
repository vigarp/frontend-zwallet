// import internal modules
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

// import external modules
import './sidebar.css';

const Sidebar = () => {
    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem('token')
        navigate('/auth/login')
    }
    return (
        <aside className="bg-white rounded w-25 d-flex flex-column justify-content-between p-3 me-3">
            <div className="sidebar-upper">
                <div className="row p-3">
                    <div className="col flex-grow-0 p-0 marker-icon"><img src={require("../../../assets/img/icons/marker_homepage.svg").default} alt="icon-marker-homepage" /></div>
                    <div className="col flex-grow-0 py-1"><img src={require("../../../assets/img/icons/grid_homepage_active.svg").default} alt="icon-grid-homepage-active" /></div>
                    <div className="col fw-bold text-primary py-1 dashboard-pointer"><Link to={"/main"} style={{ textDecoration: 'none' }}>Dashboard</Link></div>
                </div>
                <div className="row p-3">
                    <div className="col flex-grow-0 "><img src={require("../../../assets/img/icons/arrowup_homepage.svg").default} alt="icon-arrowup-homepage" /></div>
                    <div className="col text-decoration-none dashboard-pointer"><Link to={"/main/transfer"} style={{ textDecoration: 'none', color: 'black' }}>Transfer</Link></div>
                </div>
                <div className="row p-3">
                    <div className="col flex-grow-0"><img src={require("../../../assets/img/icons/plus_homepage.svg").default} alt="icon-plus-homepage" /></div>
                    <div className="col text-decoration-none dashboard-pointer"><Link to={"/main/topup"} style={{ textDecoration: 'none', color: 'black' }}>Top Up</Link></div>
                </div>
                <div className="row p-3">
                    <div className="col flex-grow-0"><img src={require("../../../assets/img/icons/user_homepage.svg").default} alt="icon-user-homepage" /></div>
                    <div className="col text-decoration-none dashboard-pointer"><Link to={"/main/profile"} style={{ textDecoration: 'none', color: 'black' }}>Profile</Link></div>
                </div>
            </div>
            <div className="sidebar-lower">
                <div className="row p-3">
                    <div className="col flex-grow-0"><img src={require("../../../assets/img/icons/logout_homepage.svg").default} alt="icon-logout-homepage" /></div>
                    <div onClick={handleLogout} className="col text-decoration-none dashboard-pointer"><Link to={"/auth/login"} style={{ textDecoration: 'none', color: 'black' }}>Logout</Link></div>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar
