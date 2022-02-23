// import internal modules
import React, {Fragment, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// import external modules
import { GetUserDetail } from '../../../redux/actions/user';

const ManagePhoneNumber = () => {
  const navigate = useNavigate();
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
          <div className="g-0 ps-3 my-3 fw-bold">Manage Phone Number</div>
          <div className="g-0 ps-3 my-3 text-muted">You can only delete the phone number and then<br />you must add another phone number.</div>
        </div>
        <div className="rounded p-3 d-flex g-0 me-3 my-4">
          <div className="lh-lg ps-3 flex-grow-1 user-pointer" onClick={() => navigate("/main/edit-phone-number")}>
            <div className="text-muted">Primary</div>
            <div className="fw-bold">{userDetailData.data?.phone}</div>
          </div>
          <img src={require("../../../assets/img/icons/trash_managephonenumberpage.svg").default} alt="icon-trash-managephonenumberpage" />
        </div>
      </article>
    </Fragment>
  )
}

export default ManagePhoneNumber