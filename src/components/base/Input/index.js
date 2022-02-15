// import internal modules
import React from 'react';

// import external modules
import './index.css';

const Input = ({type, ...props}) => {
    return (
        <input type={type ? type : "text"} {...props} className="py-3 px-5 row border-1 my-5 bg-transparent border-0 border-bottom w-100"/>
    )
}

export default Input
