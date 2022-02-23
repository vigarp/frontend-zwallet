// import internal modules
import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// import external modules
import Input from '../../../components/base/Input';
import { GetUserDetail } from '../../../redux/actions/user';
import './changepassword.css';

const PersonalInformation = () => {
  const dispatch = useDispatch();
  const userDetailData = useSelector((state) => state.user);

  useEffect(() => {
    dispatch((GetUserDetail()))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
            name="password"
            placeholder="Current password"
            onChange={null}
            value={null}
            className="py-3 px-5 row border-1 my-5 bg-transparent border-0 border-bottom w-75" />
          <div className="position-absolute text-danger handle-error">hehe</div>
          <div className="position-absolute my-3 mx-1"><img src={require("../../../assets/img/icons/lock_loginpage.svg").default} alt="icon-lock-loginpage" /></div>
          <Input
            type="password"
            name="password"
            placeholder="New password"
            onChange={null}
            value={null}
            className="py-3 px-5 row border-1 my-5 bg-transparent border-0 border-bottom w-75" />
          <div className="position-absolute text-danger handle-error">hehe</div>
          <div className="position-absolute my-3 mx-1"><img src={require("../../../assets/img/icons/lock_loginpage.svg").default} alt="icon-lock-loginpage" /></div>
          <Input
            type="password"
            name="password"
            placeholder="Repeat new password"
            onChange={null}
            value={null}
            className="py-3 px-5 row border-1 my-5 bg-transparent border-0 border-bottom w-75" />
          <div className="position-absolute text-danger handle-error">hehe</div>
          <div className="d-flex justify-content-end"><button onClick={null} type="submit" className="bg-primary bg-gradient w-25 rounded p-3 text-center">Change</button></div>
        </div>
      </article>
    </Fragment>
  )
}

export default PersonalInformation