// import internal modules
import React, {useContext} from 'react';
import { Link } from 'react-router-dom';

// import external modules
import './navbar.css';

const Navbar = () => {
    return (
        <nav className="h-20 bg-white rounded-bottom">
            <div className="container d-flex justify-content-between p-3">
                <div className="text-primary fw-bold fs-3"><Link to={"/main"} style={{textDecoration: 'none'}}>Zwallet</Link></div>
                <div className="d-flex">
                    <img className="user-pointer" src={require("../../../assets/img/pictures/momo_taro_search_receiver.png")} height={50} width={50} alt="" />
                    <div className="d-flex flex-column ms-3 me-3">
                        <div className="fw-bold">Jhon</div>
                        <div>doddy@mail.id</div>
                    </div>
                    <div className="user-pointer mt-2"><img src={require("../../../assets/img/icons/bell_homepage.png")} alt="" /></div>
                </div>
            </div>
        </nav>
    )
}
export default Navbar
