// import internal modules
import React from 'react';

// import external modules
import './index.css';

const Input = ({type, ...props}) => {
    return (
        <input type={type ? type : "text"} {...props} />
    )
}

export default Input
