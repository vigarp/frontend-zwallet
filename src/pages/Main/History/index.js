// import internal modules
import React, {Fragment, useEffect, useState} from 'react';
import axios from 'axios';
import { decodeToken } from 'react-jwt';

const History = () => {
  const tokenUser = localStorage.getItem('token');
  const userInfo = decodeToken(tokenUser);

  const [history, setHistory] = useState([])

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_URL_BACKEND}/users/${userInfo.id}/history?limit=5`,
    {
      headers: {
        Authorization: 'Bearer ' + tokenUser
      }
    })
    .then((res) => {
      const resultHistory = res.data.data;
      setHistory(resultHistory);
    })
    .catch((err) => {
      console.log(err.response)
    })
  }, []);

  const colorMoney = (type_detail) => {
    if (type_detail === "Transfer Out") return 'red'
    else return 'green'
  }
  const topUpPic = (type_detail) => {
    if (type_detail === "Topup") return require('../../../assets/img/pictures/topup-icons.png')
}
const topUpName = (type_detail) => {
    if (type_detail === "Topup") return 'topup ewallet'
}
  return (
    <Fragment>
            <article className="bg-white rounded g-0 p-4">
                <div className="g-0 ps-3 fw-bold">Transactions History</div>
                {history.map((item, index) => (
                    <div className="row g-0 me-3 my-4" key={index}>
                        <div className="col flex-grow-0 px-3"><img src={topUpPic(item.type_detail) ? topUpPic(item.type_detail) : item.picture} width={60} height={60} alt="" /></div>
                        <div className="col lh-lg">
                            <div className="fw-bold">{topUpName(item.type_detail) ? topUpName(item.type_detail) : item.username}</div>
                            <div className="text-muted">{item.type_detail}</div>
                        </div>
                        <div className="col text-end align-self-center fw-bold" style={{ color: colorMoney(item.type_detail) }}>Rp. {item.amount}</div>
                    </div>
                ))}
            </article>
        </Fragment>
  )
}

export default History