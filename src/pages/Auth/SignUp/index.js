// import internal modules
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

// import external modules
import { SignUpUser } from '../../../redux/actions/signUp';
import Input from '../../../components/base/Input';
import Button from '../../../components/base/Button';

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signUpData = useSelector((state => state.signUp))

  const [formSignUp, setFormSignUp] = useState({
    username: '',
    email: '',
    password: ''
  })
  const [formSignUpError, setFormSignUpError] = useState(false);
  const [passHidden, setPassHidden] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormSignUp({
      ...formSignUp,
      [e.target.name]: e.target.value
    })
  }

  const handleHiddenPass = () => {
    if (passHidden === true) {
      setPassHidden(false)
    } else {
      setPassHidden(true)
    }
  }

  const validateSignUp = (values) => {
    const errors = {};
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required";
    }
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
    const resultValidate = validateSignUp(formSignUp);
    setFormSignUpError(resultValidate);
    handleClick(resultValidate);
  }
  const handleClick = (resultValidate) => {
    if (Object.keys(resultValidate).length === 0) {
      setFormSignUpError(false)
      setLoading(true)
      dispatch((SignUpUser(formSignUp, setLoading, navigate)))
    }
  }
  
  return (
    <div className="my-5 mx-5">
      <h1 className="text-black text-bold fs-5 text-start my-5 fs-3 fw-bold">Start Accessing Banking Needs<br />
        With All Devices and All Platforms<br />With 30.000+ Users</h1>
      <div className="text-muted py-3 text-start my-5 fs-5">Transfering money is eassier than ever, you can access<br />
        Zwallet wherever you are. Desktop, laptop, mobile phone?<br />we cover all of that for you!</div>
      <div className="my-5">
        <div className="position-absolute my-3 mx-1"><img src={require("../../../assets/img/icons/person_loginpage.svg").default} alt="icon-person-loginpage" /></div>
        <Input
          type="text"
          name="username"
          placeholder="Enter your username"
          onChange={handleChange}
          value={formSignUp.username}
          className="py-3 px-5 row border-1 my-5 bg-transparent border-0 border-bottom w-100" />
        <div className="position-absolute text-error handle-error">{formSignUpError.username}</div>
        <div className="position-absolute my-3 mx-1"><img src={require("../../../assets/img/icons/mail_loginpage.svg").default} alt="icon-mail-loginpage" /></div>
        <Input
          type="email"
          name="email"
          placeholder="Enter your e-mail"
          onChange={handleChange}
          value={formSignUp.email}
          className="py-3 px-5 row border-1 my-5 bg-transparent border-0 border-bottom w-100" />
        <div className="position-absolute text-error handle-error">{formSignUpError.email}</div>
        <div className="position-absolute my-3 mx-1"><img src={require("../../../assets/img/icons/lock_loginpage.svg").default} alt="icon-lock-loginpage" /></div>
        {passHidden === true ? (
          <>
            <Input
              type="password"
              name="password"
              placeholder="Enter your password"
              onChange={handleChange}
              value={formSignUp.password}
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
              value={formSignUp.password}
              className="py-3 px-5 row border-1 my-5 bg-transparent border-0 border-bottom w-100" />
            <img onClick={() => handleHiddenPass()} className="position-relative float-end icon-eyecrossed" src={require("../../../assets/img/icons/eye_loginpage.svg").default} alt="icon-eyecrossed-loginpage" />
          </>
        )}
        <div className="position-absolute text-error handle-error">{formSignUpError.password}</div>
        <div className="text-center my-3 text-error">{signUpData.error}</div>
        <Button isLoading={loading} onClick={handleSubmit} className="btn-login py-3 px-5 bg-secondary bg-opacity-25 text-secondary w-100 mt-5 fw-bold">Sign Up</Button>
        <div className="text-center mt-3">Already have an account? Let's <Link to={"/auth/login"} style={{ textDecoration: 'none', fontWeight: 'bold' }}>Login</Link></div>
      </div>
    </div>
  )
}

export default SignUp