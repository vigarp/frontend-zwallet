// import internal modules
import React, { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// import external modules
import Input from '../../../components/base/Input';
import { editPassword } from '../../../redux/actions/editPassword';
import './changepassword.css';

const PersonalInformation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const [formPassword, setFormPassword] = useState({
    oldPassword: '',
    newPassword: '',
    reNewPassword: ''
  })
  const [formPasswordError, setFormPasswordErrror] = useState({});

  const handleChange = (e) => {
    setFormPassword({
      ...formPassword,
      [e.target.name]: e.target.value
    })
  }

  const validatePassword = (values) => {
    const errors = {};
    if (!values.oldPassword) {
      errors.oldPassword = "Password is required";
    } else if (values.oldPassword.length < 6) {
      errors.oldPassword = "Password must be more than 6 characters";
    }
    if (!values.newPassword) {
      errors.newPassword = "Password is required";
    } else if (values.newPassword.length < 6) {
      errors.newPassword = "Password must be more than 6 characters";
    }
    if (!values.reNewPassword) {
      errors.reNewPassword = "Password is required";
    } else if (values.reNewPassword.length < 6) {
      errors.reNewPassword = "Password must be more than 6 characters";
    } else if (values.reNewPassword !== values.newPassword) {
      errors.reNewPassword = "Password is not match"
    }
    return errors
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const resultValidate = validatePassword(formPassword);
    setFormPasswordErrror(resultValidate);
    handleClick(resultValidate);
  }

  const handleClick = (resultValidate) => {
    if (Object.keys(resultValidate).length === 0) {
      console.log('ini form pass', formPassword)
      dispatch((editPassword(formPassword)))
      .then(() => {
        navigate(-1)
      })
    }
  }

  return (
    <Fragment>
      <article className="bg-white rounded g-0 p-4">
        <div className="w-100 mx-3">
          <div className="g-0 ps-3 my-3 fw-bold">Change Password</div>
          <div className="g-0 ps-3 my-3 text-muted">You must enter your current password and then<br />type your new password twice.</div>
        </div>
        <div className="my-5 form-change-position">
          <div className="position-absolute my-3 mx-1"><img src={require("../../../assets/img/icons/lock_loginpage.svg").default} alt="icon-lock-loginpage" /></div>
          <Input
            type="password"
            name="oldPassword"
            placeholder="Current password"
            onChange={handleChange}
            value={formPassword.oldPassword}
            className="py-3 px-5 row border-1 my-5 bg-transparent border-0 border-bottom w-75" />
          <div className="position-absolute text-danger handle-error">{formPasswordError.oldPassword}</div>
          <div className="position-absolute my-3 mx-1"><img src={require("../../../assets/img/icons/lock_loginpage.svg").default} alt="icon-lock-loginpage" /></div>
          <Input
            type="password"
            name="newPassword"
            placeholder="New password"
            onChange={handleChange}
            value={formPassword.newPassword}
            className="py-3 px-5 row border-1 my-5 bg-transparent border-0 border-bottom w-75" />
          <div className="position-absolute text-danger handle-error">{formPasswordError.newPassword}</div>
          <div className="position-absolute my-3 mx-1"><img src={require("../../../assets/img/icons/lock_loginpage.svg").default} alt="icon-lock-loginpage" /></div>
          <Input
            type="password"
            name="reNewPassword"
            placeholder="Repeat new password"
            onChange={handleChange}
            value={formPassword.reNewPassword}
            className="py-3 px-5 row border-1 my-5 bg-transparent border-0 border-bottom w-75" />
          <div className="position-absolute text-danger handle-error">{formPasswordError.reNewPassword}</div>
          <div className="d-flex justify-content-end"><button onClick={handleSubmit} type="submit" className="bg-primary bg-gradient w-25 rounded p-3 text-center">Change</button></div>
        </div>
      </article>
    </Fragment>
  )
}

export default PersonalInformation