// import internal modules
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// import external modules
import { LoginUser } from '../../../redux/actions/login';
import Input from '../../../components/base/Input';
import Button from '../../../components/base/Button';

const Login = () => {
  const dispatch = useDispatch();

  const loginData = useSelector((state => state.login))

  const [formLogin, setFormLogin] = useState({
    email: '',
    password: ''
  })
  const [formLoginError, setFormLoginError] = useState(false);
  const [loading, setLoading] = useState(false)
  const [passHidden, setPassHidden] = useState(true)

  const handleChange = (e) => {
    setFormLogin({
      ...formLogin,
      [e.target.name]: e.target.value
    })
  }

  const validateLogin = (values) => {
    const errors = {};
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!values.email) {
      errors.email = "Email or Password Invalid";
    } else if (!regex.test(values.email)) {
      errors.email = "Email or Password Invalid";
    }
    if (!values.password) {
      errors.password = "Email or Password Invalid";
    } else if (values.password.length < 6) {
      errors.password = "Email or Password Invalid";
    }
    return errors;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const resultValidate = validateLogin(formLogin);
    setFormLoginError(resultValidate);
    handleClick(resultValidate);
  }

  const handleClick = (resultValidate) => {
    if (Object.keys(resultValidate).length === 0) {
      setFormLoginError(false)
      setLoading(true)
      dispatch((LoginUser(formLogin, setLoading)))
    }
  }

  const handleHiddenPass = () => {
    if (passHidden === true) {
      setPassHidden(false)
    } else {
      setPassHidden(true)
    }
  }
  return (
    <div className="my-5 mx-5">
      <h1 className="text-black text-bold text-start my-5 fs-4 fw-bold">Start Accessing Banking Needs<br />
        With All Devices and All Platforms<br /> With 30.000+ Users</h1>
      <div className="text-muted py-3 text-start my-5 fs-5">Transfering money is eassier than ever, you can access<br />
        Zwallet wherever you are. Desktop, laptop, mobile phone?<br />we cover all of that for you!</div>
      <div className="my-5">
        {!formLoginError ? (
          <>
            <div className="position-absolute my-3 mx-1"><img src={require("../../../assets/img/icons/mail_loginpage.svg").default} alt="icon-mail-loginpage" /></div>
            <Input
              type="email"
              name="email"
              placeholder="Enter your e-mail"
              onChange={handleChange}
              value={formLogin.email}
              className="py-3 px-5 row border-1 my-5 bg-transparent border-0 border-bottom w-100" />
            <div className="position-absolute my-3 mx-1"><img src={require("../../../assets/img/icons/lock_loginpage.svg").default} alt="icon-lock-loginpage" /></div>
            {passHidden === true ? (
              <>
                <Input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  onChange={handleChange}
                  value={formLogin.password}
                  className="py-3 px-5 row border-1 my-5 bg-transparent border-0 border-bottom w-100" />
                <img onClick={() => handleHiddenPass()} className="position-relative float-end icon-eyecrossed" src={require("../../../assets/img/icons/eye-crossed_loginpage.svg").default} alt="icon-eyecrossed-loginpage" />
              </>
            ) : (
              <>
                <Input
                  type="text"
                  name="password"
                  placeholder="Enter your password"
                  onChange={handleChange}
                  value={formLogin.password}
                  className="py-3 px-5 row border-1 my-5 bg-transparent border-0 border-bottom w-100" />
                <img onClick={() => handleHiddenPass()} className="position-relative float-end icon-eyecrossed" src={require("../../../assets/img/icons/eye_loginpage.svg").default} alt="icon-eyecrossed-loginpage" />
              </>
            )}
          </>
        ) : (
          <>
            <div className="position-absolute my-3 mx-1"><img src={require("../../../assets/img/icons/mail-error_loginpage.svg").default} alt="icon-mail-loginpage" /></div>
            <Input
              type="email"
              name="email"
              placeholder="Enter your e-mail"
              onChange={handleChange}
              value={formLogin.email}
              className="py-3 px-5 row my-5 bg-transparent border-0 border-bottom w-100 border-error" />
            <div className="position-absolute my-3 mx-1"><img src={require("../../../assets/img/icons/lock-error_loginpage.svg").default} alt="icon-lock-loginpage" /></div>
            {passHidden === true ? (
              <>
                <Input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  onChange={handleChange}
                  value={formLogin.password}
                  className="py-3 px-5 row border-1 my-5 bg-transparent border-0 border-bottom w-100 border-error" />
                <img onClick={() => handleHiddenPass()} className="position-relative float-end icon-eyecrossed" src={require("../../../assets/img/icons/eye-crossed_loginpage.svg").default} alt="icon-eyecrossed-loginpage" />
              </>
            ) : (
              <>
                <Input
                  type="text"
                  name="password"
                  placeholder="Enter your password"
                  onChange={handleChange}
                  value={formLogin.password}
                  className="py-3 px-5 row border-1 my-5 bg-transparent border-0 border-bottom w-100 border-error" />
                <img onClick={() => handleHiddenPass()} className="position-relative float-end icon-eyecrossed" src={require("../../../assets/img/icons/eye_loginpage.svg").default} alt="icon-eyecrossed-loginpage" />
              </>
            )}
          </>
        )}

        <div className="text-end"><Link to={"/auth/forgot-password"} style={{ textDecoration: 'none', color: 'black' }}>Forgot Password?</Link></div>
        <div className="text-center my-3 text-error">{formLoginError.email || formLoginError.password || loginData.error}</div>
        <Button isLoading={loading} onClick={handleSubmit} className="btn-login py-3 px-5 bg-secondary bg-opacity-25 text-secondary w-100 mt-5 fw-bold">Login</Button>
        <div className="text-center mt-5">Don't have an account? Let's <Link to={"/auth/signup"} style={{ textDecoration: 'none', fontWeight: 'bold' }}> Sign Up</Link></div>
      </div>
    </div>
  )
}

export default Login