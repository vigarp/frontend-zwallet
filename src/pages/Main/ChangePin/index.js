// import internal modules
import React, { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// import external modules
import Input from '../../../components/base/Input';
import Button from '../../../components/base/Button';
import { editPassword } from '../../../redux/actions/editPassword';

const ChangePin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [pin, setPin] = useState(new Array(6).fill(""));
  const [formPinError, setFormPinError] = useState(false);
  const resultPin = pin.join("");

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setPin([...pin.map((d, idx) => (idx === index ? element.value : d))]);

    //Focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const validatePin = (values) => {
    const errors = {};
    if (values.length < 6) {
      errors.pin = "PIN Invalid";
    }
    return errors;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const resultValidate = validatePin(resultPin);
    setFormPinError(resultValidate);
    handleClick(resultValidate);
  }

  const handleClick = (resultValidate) => {
    if (Object.keys(resultValidate).length === 0) {
      setFormPinError(false)
    }
  }

  return (
    <Fragment>
      <article className="bg-white rounded g-0 p-4">
        <div className="w-100 mx-3">
          <div className="g-0 ps-3 my-3 fw-bold">Change PIN</div>
          <div className="g-0 ps-3 my-3 text-muted">YEnter your current 6 digits Zwallet PIN below to<br />continue to the next steps.</div>
        </div>
        <div className="d-flex flex-column align-items-center">
          <div className="my-5">
            {pin.map((data, index) => (
              <input
                className="otp-field border-1 px-3 fw-bold fs-3"
                type="text"
                name="pin"
                maxLength="1"
                key={index}
                value={data}
                onChange={e => handleChange(e.target, index)}
                onFocus={e => e.target.select()} />
            ))}
          </div>

          <Button isLoading={null} onClick={null} className="btn-login py-3 px-5 bg-secondary bg-opacity-25 text-secondary w-50 mt-5 fw-bold">Continue</Button>
        </div>
      </article>
    </Fragment>
  )
}

export default ChangePin