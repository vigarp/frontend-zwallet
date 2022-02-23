// import internal modules
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

// import external modules
import { LoginUser } from '../../../redux/actions/login';
import Input from '../../../components/base/Input';
import Button from '../../../components/base/Button';
import './login.css'

const Login = () => {
  const dispatch = useDispatch();

  const [formLogin, setFormLogin] = useState({
    email: '',
    password: ''
  })
  const [formLoginError, setFormLoginError] = useState({});
  
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
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "Email address is invalid";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 6) {
      errors.password = "Password must be more than 6 characters";
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
      dispatch((LoginUser(formLogin)))
    }
  }
  return (
    <div className="my-5 mx-5">
      <h1 className="text-black text-bold fs-5 text-start my-5 fs-3 fw-bold">Start Accessing Banking Needs<br /> 
      With All Devices and All Platforms<br /> With 30.000+ Users</h1>
      <div className="text-muted py-3 text-start my-5 fs-5">Transfering money is eassier than ever, you can access<br />
      Zwallet wherever you are. Desktop, laptop, mobile phone?<br />we cover all of that for you!</div>
      <div className="my-5">
        <div className="position-absolute my-3 mx-1"><img src={require("../../../assets/img/icons/mail_loginpage.svg").default} alt="icon-mail-loginpage" /></div>
        <Input
          type="email"
          name="email"
          placeholder="Enter your e-mail"
          onChange={handleChange}
          value={formLogin.email} />
        <div className="position-absolute text-danger handle-error">{formLoginError.email}</div>
        <div className="position-absolute my-3 mx-1"><img src={require("../../../assets/img/icons/lock_loginpage.svg").default} alt="icon-lock-loginpage" /></div>
        <Input
          type="password"
          name="password"
          placeholder="Enter your password"
          onChange={handleChange}
          value={formLogin.password} />
          <div className="position-absolute text-danger handle-error">{formLoginError.password}</div>
        <div className="text-end"><Link to={"/auth/forgot-password"} style={{ textDecoration: 'none' }}>Forgot Password?</Link></div>
        <Button isLoading={undefined} onClick={handleSubmit} className="py-3 px-5 bg-secondary bg-opacity-50 text-white w-100 rounded-3 mt-5 fw-bold">Login</Button>
        <div className="text-center mt-3">Don't have an account? Let's <Link to={"/auth/signup"} style={{ textDecoration: 'none' }}> Sign Up</Link></div>
      </div>
    </div>
  )
}

export default Login