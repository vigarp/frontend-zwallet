// import internal modules
import React from 'react'

const BlueBox = ({balanceUser, phoneUser}) => {
    return (
        <div className="col lh-lg">
            <div className="text-white">Balance</div>
            <div className="fs-2 text-white fw-bold">{balanceUser}</div>
            <div className="text-white">{phoneUser}</div>
        </div>
    )
}

export default BlueBox
