// import internal modules
import React, { useState } from 'react';

// import external modules
import Button from '../../../components/base/Button';

const Login = () => {
    const [pin, setPin] = useState(new Array(6).fill(""));
    const [formPinError, setFormPinError] = useState(false);
    const resultPin = pin.join("");

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return false;

        setPin([...pin.map((d, idx) => (idx === index ? element.value : d))]);

        //Focus next input
        if (element.nextSibling) {
            element.nextSibling.focus();
        }
    };

    const validatePin = (values) => {
        const errors = {};
        if (values.length < 6) {
            errors.pin = "PIN Invalid";
        }
        return errors;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const resultValidate = validatePin(resultPin);
        setFormPinError(resultValidate);
        handleClick(resultValidate);
    }

    const handleClick = (resultValidate) => {
        if (Object.keys(resultValidate).length === 0) {
            setFormPinError(false)
        }
    }
    return (
        <div className="my-5 mx-5">
            <h1 className="text-black text-bold text-start my-5 fs-4 fw-bold">Secure Your Account, Your Wallet,<br />and Your Data With 6 Digits PIN<br />That You Created Yourself.</h1>
            <div className="text-muted py-3 text-start my-5 fs-5">Create 6 digits pin to secure all your money and your data in<br />Zwallet app. Keep it secret and don't tell anyone about your<br />Zwallet account password and the PIN.</div>
            <div className="my-5 text-center">
                {pin.map((data, index) => (
                    <input
                        className="otp-field border-1 px-3 fw-bold fs-3"
                        type="text"
                        name="pin"
                        maxLength="1"
                        key={index}
                        value={data}
                        onChange={e => handleChange(e.target, index)}
                        onFocus={e => e.target.select()} />
                ))}
            </div>
            <div className="text-center my-3 text-error">{formPinError.pin}</div>
            <Button isLoading={null} onClick={handleSubmit} className="btn-login py-3 px-5 bg-secondary bg-opacity-25 text-secondary w-100 mt-5 fw-bold">Confirm</Button>
        </div>
    )
}

export default Login