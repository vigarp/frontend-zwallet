// import internal modules
import React from 'react'

const BlueBox = ({balance}) => {
    return (
        <div className="col lh-lg">
            <div className="text-white">Balance</div>
            <div className="fs-2 text-white fw-bold">{balance}</div>
            <div className="text-white">+62 813-9387-7946</div>
        </div>
    )
}

export default BlueBox
