// import internal modules
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import external modules
import Input from '../../../components/base/Input';
import Button from '../../../components/base/Button';

const ResetPassword = () => {
  const loginData = useSelector((state => state.login))

  const [formNewPassword, setFormNewPassword] = useState({
    newPassword: '',
    repeatNewPassword: ''
  })
  const [formNewPasswordError, setFormNewPasswordError] = useState(false);
  const [passHiddenFirst, setPassHiddenFirst] = useState(true);
  const [passHiddenSecond, setPassHiddenSecond] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormNewPassword({
      ...formNewPassword,
      [e.target.name]: e.target.value
    })
  }

  const handleHiddenPassFirst = () => {
    if (passHiddenFirst === true) {
      setPassHiddenFirst(false)
    } else {
      setPassHiddenFirst(true)
    }
  }
  const handleHiddenPassSecond = () => {
    if (passHiddenSecond === true) {
      setPassHiddenSecond(false)
    } else {
      setPassHiddenSecond(true)
    }
  }

  const validateNewPassword = (values) => {
    const errors = {};
    if (!values.newPassword) {
      errors.newPassword = "Password required";
    } else if (values.newPassword.length < 6) {
      errors.newPassword = "Password at least 6 characters";
    }
    if (!values.repeatNewPassword) {
      errors.repeatNewPassword = "Repeat Password required";
    } else if (values.repeatNewPassword.length < 6) {
      errors.repeatNewPassword = "Repeat Password at least 6 characters";
    } else if (values.newPassword !== values.repeatNewPassword) {
      errors.repeatNewPassword = "Password is not match"
    }
    return errors;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const resultValidate = validateNewPassword(formNewPassword);
    setFormNewPasswordError(resultValidate);
    handleClick(resultValidate);
  }

  const handleClick = (resultValidate) => {
    if (Object.keys(resultValidate).length === 0) {
      setFormNewPasswordError(false)
      setLoading(true)
      // dispatch((LoginUser(formLogin, setLoading)))
    }
  }
  return (
    <div className="my-5 mx-5">
      <h1 className="text-black text-bold text-start my-5 fs-4 fw-bold">Did You Forgot Your Password?<br />Don't Worry, You Can Reset Your<br />Password In a Minutes.</h1>
      <div className="text-muted py-3 text-start my-5 fs-5">Now you can create a new password for your Zwallet<br />account. Type your password twice so we can confirm your<br />new passsword.</div>
      <div className="my-5">
        <div className="position-absolute my-3 mx-1"><img src={require("../../../assets/img/icons/lock_loginpage.svg").default} alt="icon-lock-loginpage" /></div>
        {passHiddenFirst === true ? (
          <>
            <Input
              type="password"
              name="newPassword"
              placeholder="Enter your password"
              onChange={handleChange}
              value={formNewPassword.newPassword}
              className="py-3 px-5 row border-1 my-5 bg-transparent border-0 border-bottom w-100" />
            <img onClick={() => handleHiddenPassFirst()} className="position-relative float-end icon-eyecrossed" src={require("../../../assets/img/icons/eye-crossed_loginpage.svg").default} alt="icon-eyecrossed-loginpage" />
          </>
        ) : (
          <>
            <Input
              type="text"
              name="newPassword"
              placeholder="Enter your password"
              onChange={handleChange}
              value={formNewPassword.newPassword}
              className="py-3 px-5 row border-1 my-5 bg-transparent border-0 border-bottom w-100" />
            <img onClick={() => handleHiddenPassFirst()} className="position-relative float-end icon-eyecrossed" src={require("../../../assets/img/icons/eye_loginpage.svg").default} alt="icon-eyecrossed-loginpage" />
          </>
        )}
        <div className="position-absolute my-3 mx-1"><img src={require("../../../assets/img/icons/lock_loginpage.svg").default} alt="icon-lock-loginpage" /></div>
        {passHiddenSecond === true ? (
          <>
            <Input
              type="password"
              name="repeatNewPassword"
              placeholder="Enter your password"
              onChange={handleChange}
              value={formNewPassword.repeatNewPassword}
              className="py-3 px-5 row border-1 my-5 bg-transparent border-0 border-bottom w-100" />
            <img onClick={() => handleHiddenPassSecond()} className="position-relative float-end icon-eyecrossed" src={require("../../../assets/img/icons/eye-crossed_loginpage.svg").default} alt="icon-eyecrossed-loginpage" />
          </>
        ) : (
          <>
            <Input
              type="text"
              name="repeatNewPassword"
              placeholder="Enter your password"
              onChange={handleChange}
              value={formNewPassword.repeatNewPassword}
              className="py-3 px-5 row border-1 my-5 bg-transparent border-0 border-bottom w-100" />
            <img onClick={() => handleHiddenPassSecond()} className="position-relative float-end icon-eyecrossed" src={require("../../../assets/img/icons/eye_loginpage.svg").default} alt="icon-eyecrossed-loginpage" />
          </>
        )}
        <div className="text-center my-3 text-error">{formNewPasswordError.newPassword || formNewPasswordError.repeatNewPassword || loginData.error}</div>
        <Button isLoading={loading} onClick={handleSubmit} className="btn-login py-3 px-5 bg-secondary bg-opacity-25 text-secondary w-100 mt-5 fw-bold">Confirm</Button>
      </div>
    </div>
  )
}

export default ResetPassword