// import internal modules
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

// import external modules
import { editPic } from '../../../redux/actions/editPic';
import Button from '../../../components/base/Button';
import './modalpic.css'

const ModalPic = ({ openModal }) => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [formPictureError, setFormPictureError] = useState(false);

  // const [formDataPicTemp, setFormDataPicTemp] = useState({
  //   picture: ""
  // })
  // const formDataPic = new FormData()
  // formDataPic.append("picture", formDataPicTemp.picture[0])

  const [formPicture, setFormPicture] = useState({
    picture: ''
  })

  const handleChange = (e) => {
    setFormPicture({
      ...formPicture,
      [e.target.name]: e.target.value
    })
  }

  const validatePicture = (values) => {
    const errors = {};
    if (!values.picture) {
      errors.picture = "Picture link is required";
    }
    return errors;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const resultValidate = validatePicture(formPicture);
    setFormPictureError(resultValidate);
    handleClick(resultValidate)
  }
  const handleClick = (resultValidate) => {
    if (Object.keys(resultValidate).length === 0) {
      setFormPictureError(false)
      setLoading(true)
      dispatch((editPic(formPicture, setLoading, openModal)))
    }
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
          {/* <input disabled type="file" onChange={(e) => setFormDataPicTemp({ ...formDataPicTemp, picture: e.currentTarget.files })} /><br /> */}
          <input 
          type="text"
          name="picture"
          placeholder="Please input an url link here"
          onChange={handleChange}
          value={formPicture.picture}
          className="my-3" />
          <div className="text-error">{formPictureError.picture}</div>
          <hr />
          <Button isLoading={loading} className="my-3 bg-primary bg-gradient px-3" type="submit">Upload</Button>
        </form>
      </div>
    </div>
  )
}

export default ModalPic