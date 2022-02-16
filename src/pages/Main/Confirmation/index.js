// import internal modules
import React, {Fragment, useEffect, useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {decodeToken} from 'react-jwt';

const Confirmation = () => {
  const navigate = useNavigate();
  const tokenUser = localStorage.getItem('token');
  const userInfo = decodeToken(tokenUser);

  const transferDetail = JSON.parse(localStorage.getItem('tempTransfer'));
  const [detailPerson, setDetailPerson] = useState([]);
  const [balanceLeft, setBalanceLeft] = useState([]);
  const [formInput, setFormInput] = useState({
    receiver: transferDetail.receiver,
    amount: transferDetail.amount,
    notes: transferDetail.notes
  })

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_URL_BACKEND}/users/${transferDetail.receiver}`,
    {
      headers: {
        Authorization: 'Bearer ' + tokenUser
      }
    })
    .then((res) => {
      const resultReceiver = res.data.data;
      setDetailPerson(resultReceiver);
    })
    .catch((err) => {
      console.log(err.response)
    })
  }, []);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_URL_BACKEND}/users/${userInfo.id}`,
    {
      headers: {
        Authorization: 'Bearer ' + tokenUser
      }
    })
    .then((res) => {
      const userBalanceLeft = res.data.data.balance;
      setBalanceLeft(userBalanceLeft);
    })
  }, []);

  const handleClick = () => {
    axios.post(`${process.env.REACT_APP_URL_BACKEND}/users/${userInfo.id}/transfer`,
    {
      receiver: formInput.receiver,
      amount: formInput.amount,
      notes: formInput.notes
    }, {
      headers: {
        Authorization: 'Bearer ' + tokenUser
      }
    })
    .then((res) => {
      alert(res.data.message);
      localStorage.removeItem('tempTransfer')
      navigate("/main/transfer-success")
    })
  }

  return (
    <Fragment>
            <article className="bg-white rounded g-0 p-4">
                <div className="g-0 ps-3 fw-bold">Transfer To</div>
                <div className="rounded py-3 bg-light row my-3">
                    <div className="col flex-grow-0 px-3"><img src={detailPerson.picture} width={60} height={60} alt="" /></div>
                    <div className="col my-3">
                        <div className="fw-bold">{detailPerson.username}</div>
                        <div className="text-muted">{detailPerson.email}</div>
                    </div>
                </div>
                <div className="g-0 ps-3 fw-bold my-5">Details</div>
                <div className="row g-0 me-3 my-4">
                    <div className="col lh-lg ps-3">
                        <div className="text-muted">Amount</div>
                        <div className="fw-bold">Rp. {transferDetail.amount}</div>
                    </div>
                </div>
                <div className="row g-0 me-3 my-4">
                    <div className="col lh-lg ps-3">
                        <div className="text-muted">Balance Left</div>
                        <div className="fw-bold">Rp. {balanceLeft}</div>
                    </div>
                </div>
                <div className="row g-0 me-3 my-4">
                    <div className="col lh-lg ps-3">
                        <div className="text-muted">Date &#38; Time</div>
                        <div className="fw-bold">{transferDetail.date}</div>
                    </div>
                </div>
                <div className="row g-0 me-3 my-4">
                    <div className="col lh-lg ps-3">
                        <div className="text-muted">Notes</div>
                        <div className="fw-bold">{transferDetail.notes}</div>
                    </div>
                </div>
                <div className="d-flex justify-content-end">
                    <button onClick={handleClick} className="bg-primary bg-gradient w-25 rounded p-3 text-center">Continue</button>
                </div>
            </article>
        </Fragment>
  )
}

export default Confirmation