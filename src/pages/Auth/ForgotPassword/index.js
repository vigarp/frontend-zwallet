// import internal modules
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import external modules
import { LoginUser } from '../../../redux/actions/login';
import Input from '../../../components/base/Input';
import Button from '../../../components/base/Button';

const ForgotPassword = () => {
  const dispatch = useDispatch();

  const loginData = useSelector((state => state.login))

  const [formLogin, setFormLogin] = useState({
    email: '',
    password: ''
  })
  const [formLoginError, setFormLoginError] = useState(false);
  const [loading, setLoading] = useState(false);

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
  return (
    <div className="my-5 mx-5">
      <h1 className="text-black text-bold text-start my-5 fs-4 fw-bold">Did You Forgot Your Password?<br />Don't Worry, You Can Reset Your<br />Password In a Minutes.</h1>
      <div className="text-muted py-3 text-start my-5 fs-5">To reset your password, you must type your e-mail<br />and we will send a link to your email and you will be directed to the<br />reset password screens.</div>
      <div className="my-5">
        <div className="position-absolute my-3 mx-1"><img src={require("../../../assets/img/icons/mail_loginpage.svg").default} alt="icon-mail-loginpage" /></div>
        <Input
          type="email"
          name="email"
          placeholder="Enter your e-mail"
          onChange={handleChange}
          value={formLogin.email}
          className="py-3 px-5 row border-1 my-5 bg-transparent border-0 border-bottom w-100" />
        <div className="text-center my-3 text-error">{formLoginError.email || loginData.error}</div>
        <Button isLoading={loading} onClick={handleSubmit} className="btn-login py-3 px-5 bg-secondary bg-opacity-25 text-secondary w-100 mt-5 fw-bold">Confirm</Button>
      </div>
    </div>
  )
}

export default ForgotPassword