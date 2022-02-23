// import internal modules
import React, {Fragment, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import external modules
import { GetUserDetail } from '../../../redux/actions/user';

const AddPhoneNumber = () => {
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
          <div className="g-0 ps-3 my-3 fw-bold">Add Phone Number</div>
          <div className="g-0 ps-3 my-3 text-muted">Add at least one phone number for the transfer<br />ID so you can start transfering your money to<br />another user.</div>
        </div>
        <div className="my-5">
          <div className="text-center overflow-hidden my-3 mx-5 p-3">
            <img className="position-absolute mt-1" src={require("../../../assets/img/icons/phone_addphonenumberpage.svg").default} alt="" />
            <input
              onChange={null}
              name="notes"
              value={null}
              className="mx-5 border-bottom border-0"
              placeholder="Enter your phone number"
              type="text" />
          </div>
          <div className="d-flex justify-content-center"><button onClick={null} type="submit" className="bg-secondary bg-gradient w-25 rounded p-3 text-center">Add Phone Number</button></div>
        </div>
      </article>
    </Fragment>
  )
}

export default AddPhoneNumber