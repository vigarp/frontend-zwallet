// import internal modules
import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import external modules
import { PostTransfer } from '../../../redux/actions/transfer';
import { GetTransferDetail } from '../../../redux/actions/transferDetail';
import { GetUserBalance } from '../../../redux/actions/balance';
import socket from '../../../helpers/socket';

const Confirmation = () => {
    const dispatch = useDispatch();

    const transferDetail = JSON.parse(localStorage.getItem('tempTransfer'));
    const detailPersonData = useSelector((state) => state.transferDetail);
    const balanceData = useSelector((state) => state.balance);
    // eslint-disable-next-line no-unused-vars
    const [formInput, setFormInput] = useState({
        picture: require("../../../assets/img/icons/globe-admin-modal.png"),
        admin: 'isadmin',
        info: 'Zwallet mainetenance on progress'
    })

    useEffect(() => {
        dispatch((GetTransferDetail(transferDetail)))
        dispatch((GetUserBalance()))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleClick = () => {
        // dispatch((PostTransfer(formInput)))
        socket.emit('sendTip', formInput);
    }

    return (
        <Fragment>
            <article className="bg-white rounded g-0 p-4">
                <div className="g-0 ps-3 fw-bold">Transfer To</div>
                <div className="rounded py-3 bg-light row my-3">
                    <div className="col flex-grow-0 px-3"><img src={detailPersonData.data?.picture} width={60} height={60} alt="" /></div>
                    <div className="col my-3">
                        <div className="fw-bold">{detailPersonData.data?.username}</div>
                        <div className="text-muted">{detailPersonData.data?.email}</div>
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
                        <div className="fw-bold">Rp. {balanceData?.data - transferDetail.amount}</div>
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