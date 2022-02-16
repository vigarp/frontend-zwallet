// import internal modules
import React from 'react'

const HistoryBox = ({picture, amount, username, type}) => {
    const colorMoney = (type) => {
        if (type === "Transfer Out") return 'red'
        else return 'green'
    }
    return (
        <div className="row g-0 me-3 my-4">
            <div className="col flex-grow-0 px-3"><img src={picture} width={60} height={60} alt="" /></div>
            <div className="col lh-lg">
                <div className="fw-bold">{username}</div>
                <div className="text-muted">{type}</div>
            </div>
            <div className="col text-end align-self-center fw-bold" style={{ color: colorMoney(type)}}>Rp. {amount}</div>
        </div>
    )
}

export default HistoryBox
