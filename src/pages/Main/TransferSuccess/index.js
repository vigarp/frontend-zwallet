// import internal modules
import React, {Fragment, useEffect, useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { decodeToken } from 'react-jwt';

const TransferSuccess = () => {
  const navigate = useNavigate();
  const tokenUser = localStorage.getItem('token');
  const userInfo = decodeToken(tokenUser);

  const transferDetail = JSON.parse(localStorage.getItem('tempTransfer'));
  const [detailPerson, setDetailPerson] = useState([]);
  const [balanceLeft, setBalanceLeft] = useState([]);

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
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
  })
  const handleClick = () => {
    localStorage.removeItem('tempTransfer');
    navigate('/main/home')
  }
  return (
    <Fragment>
            <article className="bg-white rounded g-0 p-4">
                <div className="w-100 text-center mx-3">
                    <div className="text-center g-0 ps-3 my-3"><img src={require("../../../assets/img/icons/checklist_transfer_success.svg").default} alt="" /></div>
                    <div className="text-center g-0 ps-3 my-3 fw-bold">Transfer Success</div>
                </div>
                <div className="rounded p-3 row g-0 me-3 my-4">
                    <div className="col lh-lg ps-3">
                        <div className="text-muted">Amount</div>
                        <div className="fw-bold">Rp. {transferDetail.amount}</div>
                    </div>
                </div>
                <div className="rounded p-3 row g-0 me-3 my-4">
                    <div className="col lh-lg ps-3">
                        <div className="text-muted">Balance Left</div>
                        <div className="fw-bold">Rp. {balanceLeft}</div>
                    </div>
                </div>
                <div className="rounded p-3 row g-0 me-3 my-4">
                    <div className="col lh-lg ps-3">
                        <div className="text-muted">Date &#38; Time</div>
                        <div className="fw-bold">{transferDetail.date}</div>
                    </div>
                </div>
                <div className="rounded p-3 row g-0 me-3 my-4">
                    <div className="col lh-lg ps-3">
                        <div className="text-muted">Notes</div>
                        <div className="fw-bold">{transferDetail.notes}</div>
                    </div>
                </div>
                <div className="fw-bold g-0 ps-3">Transfer to</div>
                <div className="rounded py-3 bg-light row my-3">
                <div className="col flex-grow-0 px-3"><img src={detailPerson.picture} width={60} height={60} alt="" /></div>
                    <div className="col my-3">
                        <div className="fw-bold">{detailPerson.username}</div>
                        <div className="text-muted">{detailPerson.email}</div>
                    </div>
                </div>
                <div className="d-flex justify-content-end">
                    <div className="bg-light rounded px-3 py-3 m-1 align-self-center"><img src={require("../../../assets/img/icons/button_share_transfer_success.svg").default} alt="" /></div>
                    <button className="bg-light rounded px-3 py-3 mx-3 align-self-center"><img src={require("../../../assets/img/icons/button_download_transfer_success.svg").default} alt=""/>Download</button>
                    <button onClick={handleClick} className="bg-primary bg-gradient w-25 rounded p-3 text-center">Back to Home</button>
                </div>
            </article>
        </Fragment>
  )
}

export default TransferSuccess