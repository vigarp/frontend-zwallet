import React, { Fragment, useState } from 'react'

import Button from '../../components/base/Button';
import socket from '../../helpers/socket';

const Admin = () => {
    const [formLoginAdmin, setFormLoginAdmin] = useState({
        isLogin: false,
        username: '',
        password: ''
    })
    const [formInfo, setFormInfo] = useState({
        picture: require("../../assets/img/icons/globe-admin-modal.png"),
        admin: 'Zwallet System Information',
        info: ''
    })
    const handleChange = (e) => {
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }

    const handleLogin = (e) => {
        e.preventDefault()
        setFormLoginAdmin({
            ...formLoginAdmin,
            isLogin: true
        })
    }
    
    const handleClick = () => {
        socket.emit('sendInfo', formInfo)
    }
    return (
        <Fragment>
            {!formLoginAdmin.isLogin ? (
                <>
                    <div className="text-center fw-bold my-5">
                        Zwallet System Administrator
                    </div>
                    <div className="text-center my-3">
                        Please Login
                    </div>
                    <div className="text-center d-flex flex-column justify-content-center align-items-center">
                        <input
                            className="mt-3 w-50 py-2"
                            type="text"
                            name="email"
                            onChange={(e) => setFormLoginAdmin({ ...formLoginAdmin, username: e.target.value })}
                            value={undefined}
                            placeholder="Email"
                        />
                        <input
                            className="mt-3 w-50 py-2"
                            type="password"
                            name="password"
                            onChange={(e) => setFormLoginAdmin({ ...formLoginAdmin, username: e.target.value })}
                            value={undefined}
                            placeholder="Password"
                        />
                        <Button isLoading={undefined} onClick={handleLogin} className="py-3 px-5 bg-secondary bg-opacity-50 text-white w-50 rounded-3 mt-5 fw-bold">Login</Button>
                    </div>
                </>
            ) : (
                <div className="border my-5 mx-5">
                    <div className="text-center fw-bold my-5">
                        Zwallet System Administrator
                    </div>
                    <div className="text-center d-flex flex-column justify-content-center align-items-center">
                        <textarea
                            className="mt-3 w-50 py-2"
                            type="text"
                            name="message"
                            onChange={handleChange}
                            value={formInfo.message}
                            placeholder="message"
                        />
                        <Button isLoading={undefined} onClick={handleClick} className="py-3 px-5 bg-secondary bg-opacity-50 text-white w-50 rounded-3 mt-5 fw-bold">Submit</Button>
                    </div>
                </div>
            )}

        </Fragment>
    )
}

export default Admin