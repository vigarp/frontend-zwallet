// import internal modules
import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
// import external modules
import { GetUserDetail } from '../../../redux/actions/user';
import { editPic } from '../../../redux/actions/editPic';
import './profile.css'

const Profile = () => {
  const tokenUser = localStorage.getItem('token');
  localStorage.removeItem('tempTransfer');
  const dispatch = useDispatch();

  const userDetailData = useSelector((state) => state.user);

  useEffect(() => {
    dispatch((GetUserDetail()))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [formDataPicTemp, setFormDataPicTemp] = useState({
    picture: ""
  })
  const formDataPic = new FormData()
  formDataPic.append("picture", formDataPicTemp.picture[0])

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch((editPic(formDataPic)))
    .then(() => {
      dispatch((GetUserDetail()))
    })
    // axios({
    //   method: 'PUT',
    //   url: `http://localhost:4001/v1/users/${userDetailData.data.id}/picture`,
    //   headers: { Authorization: 'Bearer ' + tokenUser },
    //   data: formDataPic
    // })
    //   .then(() => {
    //     dispatch((GetUserDetail()))
    //   })
    //   .catch((err) => {
    //     alert(err)
    //   })
  }
  return (
    <Fragment>
      <main className="bg-white rounded g-0 p-4 d-flex flex-column align-items-center">
        <div className="upper mt-5">
          <img className="rounded" src={userDetailData.data?.picture} height={80} width={80} alt="" />
          <div className="d-flex mt-3 user-pointer">
            <img className="ms-1" src={require("../../../assets/img/icons/edit-edit-profile-page.svg").default} alt="" />
            <form encType="multipart/form-data" onSubmit={(e) => handleSubmit(e)}>
              <input type="file" onChange={(e) => setFormDataPicTemp({ ...formDataPicTemp, picture: e.currentTarget.files })} /><br />
              <button type="submit">upload</button>
            </form>
            {/* <div className="text-muted ms-3 mt-1">Edit</div> */}
          </div>
        </div>
        <div className="lower mt-3">
          <div className="fw-bold text-center">{userDetailData.data?.username}</div>
          <div className="text-muted text-center">{userDetailData.data?.phone}</div>
        </div>
      </main>
      <main className="row g-0 mt-3">
        <article className="bg-white rounded col me-1">
          <div>personal information</div>
        </article>
        <article className="bg-white rounded col ms-1">
          <div>contact info</div>
        </article>
      </main>
    </Fragment>
  )
}

export default Profile