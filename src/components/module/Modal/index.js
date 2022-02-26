// import internal modules
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

// import external modules
import socket from '../../../helpers/socket';
import { GetShortHistory } from '../../../redux/actions/shortHistory';
import './modal.css';

const Modal = () => {
    const dispatch = useDispatch();

    const shortHistoryData = useSelector((state) => state.shortHistory);

    // useEffect(() => {
    //     dispatch((GetShortHistory()))
    // }, [])

    const transactionPic = (type_detail) => {
        if (type_detail === "Topup" || type_detail === "Transfer In") {
            return require("../../../assets/img/icons/arrowdown-modal.svg").default
        } else {
            return require("../../../assets/img/icons/arrowup_modal.svg").default
        }

    }
    const transactionSub = (type_detail) => {
        if (type_detail === "Topup") {
            return "Top Up"
        } else if (type_detail === "Transfer In") {
            return "Transfered from"
        } else {
            return "Transfered to"
        }
    }
    socket.on('sendTip', (data) => {
        console.log(data)
    })
    return (
        <div className="bg-white rounded w-25 shadow modal-notif">
            {/* nofikasi informasi */}
            <div className="text-muted text-start">Notification Information</div>
            <div className="d-flex">
                <img className="my-3" src={require("../../../assets/img/icons/globe-admin-modal.png")} width={50} height={50} alt="icon-globe-modal" />
                <div className="d-flex flex-column ms-3 my-3">
                    <div className="text-muted text-start">Zwallet System Information</div>
                    <div className="fw-bold text-start">Service Back to Normal</div>
                </div>
            </div>
            <div className="d-flex">
                <img className="my-3" src={require("../../../assets/img/icons/globe-admin-modal.png")} width={50} height={50} alt="icon-globe-modal" />
                <div className="d-flex flex-column ms-3 my-3">
                    <div className="text-muted text-start">Zwallet System Information</div>
                    <div className="fw-bold text-start">Perfomance Degraded due Maintenance System</div>
                </div>
            </div>
            {/* notifikasi transaksi */}
            <div className="text-muted text-start">Notification Transaction</div>
            {shortHistoryData?.data.map((item, index) => (
                <div className="d-flex" key={index}>
                    <img src={transactionPic(item.type_detail)} alt="icon-arrows-modal" />
                    <div className="d-flex flex-column ms-3 my-3">
                        <div className="text-muted text-start">{transactionSub(item.type_detail)} {item.username}</div>
                        <div className="fw-bold text-start">Rp. {item.amount}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Modal