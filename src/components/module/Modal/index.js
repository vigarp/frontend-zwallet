// import internal modules
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import external modules
import socket from '../../../helpers/socket';
import { GetShortHistory } from '../../../redux/actions/shortHistory';
import './modal.css';

const Modal = () => {
    const dispatch = useDispatch();

    const shortHistoryData = useSelector((state) => state.shortHistory);
    const [admInfo, setAdmInfo] = useState([])

    socket.on('sendTip', (data) => {
        setAdmInfo(admInfo.concat(data))
    })

    useEffect(() => {
        dispatch((GetShortHistory()))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

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

    console.log(admInfo)
    return (
        <div className="bg-white rounded w-25 shadow modal-notif">
            {/* nofikasi informasi */}
            <div className="text-muted text-start">Notification Information</div>
            {admInfo?.map((item, index) => (
            <div className="d-flex" key={index}>
                <img className="my-3" src={item.picture} width={50} height={50} alt="icon-globe-modal" />
                <div className="d-flex flex-column ms-3 my-3">
                    <div className="text-muted text-start">{item.admin}</div>
                    <div className="fw-bold text-start">{item.message}</div>
                </div>
            </div>
                
            ))}
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