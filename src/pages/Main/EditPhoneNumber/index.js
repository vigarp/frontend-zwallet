// import internal modules
import React, { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';

// import external modules
import { editPhone } from '../../../redux/actions/editPhone';

const EditPhoneNumber = () => {
  const dispatch = useDispatch();

  const [formInput, setFormInput] = useState({
    phone: ''
  })
  const [formInputError, setForminputError] = useState({});

  const handleChange = (e) => {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value
    })
  }

  const validateInput = (values) => {
    const errors = {};
    if (!values.phone) {
      errors.phone = "Phone number is required";
    } else if (values.phone.length < 11) {
      errors.phone = "Phone number at least 11 digits"
    }
    return errors;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const resultValidate = validateInput(formInput);
    setForminputError(resultValidate);
    handleClick(resultValidate);
  }

  const handleClick = (resultValidate) => {
    if (Object.keys(resultValidate).length === 0) {
      dispatch((editPhone(formInput)))
    }
  }
  return (
    <Fragment>
      <article className="bg-white rounded g-0 p-4">
        <div className="w-100 mx-3">
          <div className="g-0 ps-3 my-3 fw-bold">Add Phone Number</div>
          <div className="g-0 ps-3 my-3 text-muted">Add at least one phone number for the transfer<br />ID so you can start transfering your money to<br />another user.</div>
        </div>
        <div className="my-5">
          <div className="text-center overflow-hidden my-3 mx-5 p-3">
            <img className="position-absolute mt-1" src={require("../../../assets/img/icons/phone_addphonenumberpage.svg").default} alt="icon-addphonenumber-page" />
            <input
              onChange={handleChange}
              name="phone"
              value={formInput.phone}
              className="mx-5 border-bottom border-0"
              placeholder="Enter your phone number"
              type="text" />
            <div className="my-3 text-danger">{formInputError.phone}</div>
          </div>
          <div className="d-flex justify-content-center"><button onClick={handleSubmit} type="submit" className="bg-secondary bg-gradient w-25 rounded p-3 text-center">Add Phone Number</button></div>
        </div>
      </article>
    </Fragment>
  )
}

export default EditPhoneNumber