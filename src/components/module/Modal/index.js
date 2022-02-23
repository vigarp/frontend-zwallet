// import internal modules
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import external modules
import { GetShortHistory } from '../../../redux/actions/shortHistory';
import './modal.css';

const Modal = () => {
    const dispatch = useDispatch();

    const shortHistoryData = useSelector((state) => state.shortHistory);

    useEffect(() => {
        dispatch((GetShortHistory()))
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
    console.log(shortHistoryData.data)
    return (
        <div className="bg-white rounded w-25 shadow modal-notif">
            {/* nofikasi informasi */}

            {/* notifikasi transaksi */}
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