// import internal modules
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// import external modules
import Input from '../../../components/base/Input';
import Button from '../../../components/base/Button';

const Login = () => {
  // const navigate = useNavigate();

  const [formLogin, setFormLogin] = useState({
    email: '',
    password: ''
  })
  const handleChange = (e) => {
    setFormLogin({
      ...formLogin,
      [e.target.name]: e.target.value
    })
  }
  const handleClick = () => {
    axios.post(`${process.env.REACT_APP_URL_BACKEND}/login`,
    {
      email: formLogin.email,
      password: formLogin.password
    })
    .then((res) => {
      const tokenUser = res.data.data.token
      localStorage.setItem('token', tokenUser)
      alert(res.data.message)
      window.location.replace("/main")
    })
    .catch((err) => {
      console.log(err)
      if (err.response.status === 403) {
        alert(err.response.data.message)
      } else {
        alert('Internal Server Error')
      }
    })
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
        <div className="position-absolute my-3 mx-1"><img src={require("../../../assets/img/icons/lock_loginpage.svg").default} alt="icon-lock-loginpage" /></div>
        <Input
          type="password"
          name="password"
          placeholder="Enter your password"
          onChange={handleChange}
          value={formLogin.password} />
        <div className="text-end"><Link to={"/auth/forgot-password"} style={{ textDecoration: 'none' }}>Forgot Password?</Link></div>
        <Button isLoading={undefined} onClick={handleClick} className="py-3 px-5 bg-secondary bg-opacity-50 text-white w-100 rounded-3 mt-5 fw-bold">Login</Button>
        <div className="text-center mt-3">Don't have an account? Let's <Link to={"/auth/signup"} style={{ textDecoration: 'none' }}> Sign Up</Link></div>
      </div>
    </div>
  )
}

export default Login