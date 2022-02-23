// import internal modules
import React, {Fragment, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// import external modules
import { GetUserDetail } from '../../../redux/actions/user';

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
          <div className="g-0 ps-3 my-3 fw-bold">Personal Information</div>
          <div className="g-0 ps-3 my-3 text-muted">We got your personal information from the sign<br />up proccess. If you want to make changes<br />on your information, contact our support.</div>
        </div>
        <div className="rounded p-3 row g-0 me-3 my-4">
          <div className="col lh-lg ps-3">
            <div className="text-muted">Name</div>
            <div className="fw-bold">{userDetailData.data?.username}</div>
          </div>
        </div>
        <div className="rounded p-3 row g-0 me-3 my-4">
          <div className="col lh-lg ps-3">
            <div className="text-muted">Verified E-mail</div>
            <div className="fw-bold">{userDetailData.data?.email}</div>
          </div>
        </div>
        <div className="rounded p-3 d-flex g-0 me-3 my-4">
          <div className="lh-lg ps-3 flex-grow-1">
            <div className="text-muted">Phone Number</div>
            <div className="fw-bold">{userDetailData.data?.phone}</div>
          </div>
          <div className="my-3 text-primary text-decoration-none"><Link to={"/main/manage-phone-number"} style={{textDecoration: 'none'}}>Manage</Link></div>
        </div>
      </article>
    </Fragment>
  )
}

export default PersonalInformation