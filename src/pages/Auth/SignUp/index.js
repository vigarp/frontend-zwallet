// import internal modules
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

// import external modules
import { SignUpUser } from '../../../redux/actions/signUp';
import Input from '../../../components/base/Input';

const SignUp = () => {
  const dispatch = useDispatch();

  const [formSignUp, setFormSignUp] = useState({
    username: '',
    email: '',
    password: ''
  })
  const handleChange = (e) => {
    setFormSignUp({
      ...formSignUp,
      [e.target.name]: e.target.value
    })
  }
  const handleClick = () => {
    dispatch((SignUpUser(formSignUp)))
    // axios.post(`${process.env.REACT_APP_URL_BACKEND}/register`,
    // {
    //   username: formSignUp.username,
    //   email: formSignUp.email,
    //   password: formSignUp.password
    // })
    // .then((res) => {
    //   const message = res.data.message
    //   alert(message)

    //   console.log(res.data.message)
    // })
    // .catch((err) => {
    //   console.log(err)
    //   if (err.response.status === 403) {
    //     alert(err.response.data.message)
    //   } else {
    //     alert('Internal Server Error')
    //   }
    // })
  }
  return (
    <div className="my-5 mx-5">
            <h1 className="text-black text-bold fs-5 text-start my-5 fs-3 fw-bold">Start Accessing Banking Needs<br/>
            With All Devices and All Platforms<br/>With 30.000+ Users</h1>
            <div className="text-muted py-3 text-start my-5 fs-5">Transfering money is eassier than ever, you can access<br/>
            Zwallet wherever you are. Desktop, laptop, mobile phone?<br/>we cover all of that for you!</div>
            <div className="my-5">
                <div className="position-absolute my-3 mx-1"><img src={require("../../../assets/img/icons/person_loginpage.svg").default} alt="icon-person-loginpage"/></div>
                <Input
                type="text"
                name="username" 
                placeholder="Enter your username"
                onChange={handleChange}
                value={formSignUp.username}/>
                <div className="position-absolute my-3 mx-1"><img src={require("../../../assets/img/icons/mail_loginpage.svg").default} alt="icon-mail-loginpage"/></div>
                <Input 
                type="email"
                name="email"
                placeholder="Enter your e-mail"
                onChange={handleChange}
                value={formSignUp.email}/>
                <div className="position-absolute my-3 mx-1"><img src={require("../../../assets/img/icons/lock_loginpage.svg").default} alt="icon-lock-loginpage"/></div>
                <Input 
                type="password"
                name="password"
                placeholder="Enter your password"
                onChange={handleChange}
                value={formSignUp.password}/>
                <button onClick={handleClick} className="py-3 px-5 bg-secondary bg-opacity-50 text-white w-100 rounded-3 mt-3 fw-bold">Sign Up</button>
                <div className="text-center mt-3">Already have an account? Let's <Link to={"/auth/login"} style={{textDecoration: 'none'}}>Login</Link></div>
            </div>
        </div>
  )
}

export default SignUp