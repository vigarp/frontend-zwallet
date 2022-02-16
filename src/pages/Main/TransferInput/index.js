// import internal modules
import React, {Fragment, useEffect, useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { decodeToken } from 'react-jwt';


const TransferInput = () => {
  const tokenUser = localStorage.getItem('token');
  const userInfo = decodeToken(tokenUser);
  const navigate = useNavigate();

  const {id} = useParams();
  const [detailTransfer, setDetailTransfer] = useState({});
  const [currentBalance, setCurrentBalance] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_URL_BACKEND}/users/${userInfo.id}`,
    {
      headers: {
        Authorization: 'Bearer ' + tokenUser
      }
    })
    .then((res) => {
      const resultCurrentBalance = res.data.data.balance;
      setCurrentBalance(resultCurrentBalance);
    })
  }, []);
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_URL_BACKEND}/users/${id}`,
    {
      headers: {
        Authorization: 'Bearer ' + tokenUser
      }
    })
    .then((res) => {
      const resultContactDetail = res.data.data;
      setDetailTransfer(resultContactDetail);
    })
  }, []);

  const [formInput, setFormInput] = useState({
    receiver: id,
    amount: '',
    date: new Date(),
    notes: ''
  })
  const handleChange = (e) => {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value
    })
  }
  const handleClick = () => {
    localStorage.setItem('tempTransfer', JSON.stringify(formInput))
    navigate("/main/confirmation");
  }
  return (
    <Fragment>
            <article className="bg-white rounded g-0 p-4">
                <div className="g-0 ps-3 fw-bold">Transfer Money</div>
                <div className="rounded py-3 bg-light row my-3">
                    <div className="col flex-grow-0 px-3"><img src={detailTransfer.picture} width={60} height={60} alt="" /></div>
                    <div className="col my-3">
                        <div className="fw-bold">{detailTransfer.username}</div>
                        <div className="text-muted">{detailTransfer.email}</div>
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
                    </div>
                    <div className="text-center fw-bold">Rp. {currentBalance} Available</div>
                    <div className="text-center overflow-hidden my-3 mx-5 p-3">
                        <img className="position-absolute mt-1" src={require("../../../assets/img/icons/form_edit_input_amount_bank.png")} alt="" />
                        <input
                        onChange={handleChange}
                        name="notes"
                        value={formInput.notes} 
                        className="mx-5 border-0" 
                        placeholder="For buying some socks" 
                        type="text" />
                    </div>
                    <div className="d-flex justify-content-end"><button onClick={handleClick} type="submit" className="bg-primary bg-gradient w-25 rounded p-3 text-center">Continue</button></div>
                </div>
            </article>
        </Fragment>
  )
}

export default TransferInput