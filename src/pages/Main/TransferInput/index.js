// import internal modules
import React, { Fragment, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// import external modules
import { GetUserBalance } from '../../../redux/actions/balance';
import { GetReceiverDetail } from '../../../redux/actions/receiverDetail';


const TransferInput = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const balanceData = useSelector((state) => state.balance);
  const receiverData = useSelector((state) => state.receiverDetail);

  useEffect(() => {
    dispatch((GetUserBalance()))
    dispatch((GetReceiverDetail(id)))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [formInput, setFormInput] = useState({
    receiver: id,
    amount: '',
    date: new Date(),
    notes: ''
  })
  const [formInputError, setFormInputError] = useState({});

  const handleChange = (e) => {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value
    })
  }

  const validateInput = (values) => {
    const errors = {};
    if (!values.amount) {
      errors.amount = "Amounts is required";
    }
    if (!values.notes) {
      errors.notes = "Notes is required";
    }
    return errors;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const resultValidate = validateInput(formInput);
    setFormInputError(resultValidate);
    handleClick(resultValidate)
  }

  const handleClick = (resultValidate) => {
    if (balanceData?.data < formInput.amount) {
      alert("Insufficient Balance")
    } else if (Object.keys(resultValidate).length === 0) {
      localStorage.setItem('tempTransfer', JSON.stringify(formInput))
      navigate("/main/confirmation");
    }
  }
  return (
    <Fragment>
      <article className="bg-white rounded g-0 p-4">
        <div className="g-0 ps-3 fw-bold">Transfer Money</div>
        <div className="rounded py-3 bg-light row my-3">
          <div className="col flex-grow-0 px-3"><img src={receiverData.data?.picture} width={60} height={60} alt="pic-detail-user" /></div>
          <div className="col my-3">
            <div className="fw-bold">{receiverData.data?.username}</div>
            <div className="text-muted">{receiverData.data?.email}</div>
          </div>
        </div>
        <div className="my-5">
          <div className="p-3 text-muted my-5">Type the amount you want to transfer and then<br />press continue to the next steps.</div>
          <div className="text-center w-100 overflow-hidden p-3 my-5">
            <input
              onChange={handleChange}
              name="amount"
              value={formInput.amount}
              className="border-0"
              placeholder="0.00"
              type="number" />
            <div className="my-3 text-danger">{formInputError.amount}</div>
          </div>
          <div className="text-center fw-bold">Rp. {balanceData?.data} Available</div>
          <div className="text-center overflow-hidden my-3 mx-5 p-3">
            <img className="position-absolute mt-1" src={require("../../../assets/img/icons/form_edit_input_amount_bank.png")} alt="icon-pen-form" />
            <input
              onChange={handleChange}
              name="notes"
              value={formInput.notes}
              className="mx-5 border-0"
              placeholder="For buying some socks"
              type="text" />
            <div className="my-3 text-danger">{formInputError.notes}</div>
          </div>
          <div className="d-flex justify-content-end"><button onClick={handleSubmit} type="submit" className="bg-primary bg-gradient w-25 rounded p-3 text-center">Continue</button></div>
        </div>
      </article>
    </Fragment>
  )
}

export default TransferInput