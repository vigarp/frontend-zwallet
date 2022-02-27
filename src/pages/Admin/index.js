import React, { Fragment, useState } from 'react'

import Button from '../../components/base/Button';

const Admin = () => {
    const [formAdmin, setFormAdmin] = useState({
        isLogin: false,
        username: '',
        password: ''
    })

    const handleLogin = (e) => {
        e.preventDefault()
        setFormAdmin({
            ...formAdmin,
            isLogin: true
        })
    }
    console.log(formAdmin.isLogin)
    return (
        <Fragment>
            {!formAdmin.isLogin ? (
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
                            onChange={(e) => setFormAdmin({ ...formAdmin, username: e.target.value })}
                            value={undefined}
                            placeholder="Email"
                        />
                        <input
                            className="mt-3 w-50 py-2"
                            type="password"
                            name="password"
                            onChange={(e) => setFormAdmin({ ...formAdmin, username: e.target.value })}
                            value={undefined}
                            placeholder="Password"
                        />
                        <Button isLoading={undefined} onClick={(e) => { handleLogin(e) }} className="py-3 px-5 bg-secondary bg-opacity-50 text-white w-50 rounded-3 mt-5 fw-bold">Login</Button>
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
                            onChange={(e) => setFormAdmin({ ...formAdmin, username: e.target.value })}
                            value={undefined}
                            placeholder="message"
                        />
                        <Button isLoading={undefined} onClick={(e) => { handleLogin(e) }} className="py-3 px-5 bg-secondary bg-opacity-50 text-white w-50 rounded-3 mt-5 fw-bold">Submit</Button>
                    </div>
                </div>
            )}

        </Fragment>
    )
}

export default Admin