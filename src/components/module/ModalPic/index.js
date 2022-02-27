// import internal modules
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

// import external modules
import { editPic } from '../../../redux/actions/editPic';
import { GetUserDetail } from '../../../redux/actions/user';
import Button from '../../../components/base/Button';
import './modalpic.css'

const ModalPic = ({ openModal }) => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const [formDataPicTemp, setFormDataPicTemp] = useState({
    picture: ""
  })
  const formDataPic = new FormData()
  formDataPic.append("picture", formDataPicTemp.picture[0])

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    dispatch((editPic(formDataPic, setLoading)))
      .then(() => {
        dispatch((GetUserDetail()))
        openModal(false)
      })
  }
  return (
    <div className="modal-wrapper">
      <div className="modal-inner">
        <div className="d-flex">
          <div className="fw-bold text-muted flex-grow-1">Add Picture</div>
          <div className='close-button' onClick={() => openModal(false)}>X</div>
        </div>
        <hr />
        <div>Select File and upload the picture</div>
        <div className="my-3">Change Profile Picture</div>
        <form encType="multipart/form-data" onSubmit={(e) => handleSubmit(e)} className="d-flex flex-column">
          <input type="file" onChange={(e) => setFormDataPicTemp({ ...formDataPicTemp, picture: e.currentTarget.files })} /><br />
          <hr />
          <Button isLoading={loading} className="my-3 bg-primary bg-gradient px-3" type="submit">Upload</Button>
        </form>
      </div>
    </div>
  )
}

export default ModalPic