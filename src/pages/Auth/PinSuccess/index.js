// import internal modules
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// import external modules
import Button from '../../../components/base/Button';

const Login = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/auth/login")
    }
    return (
        <div className="my-5 mx-5">
            <h1 className="text-black text-bold text-start my-5 fs-4 fw-bold">Your PIN Was Successfully Created.</h1>
            <div className="text-muted py-3 text-start my-5 fs-5">Your PIN was successfully created and you can now access<br />all the features in Zwallet. Login to your new account and<br />start exploring!</div>
            <Button isLoading={null} onClick={handleClick} className="btn-login py-3 px-5 bg-primary text-white w-100 mt-5 fw-bold">Login Now</Button>
        </div>
    )
}

export default Login