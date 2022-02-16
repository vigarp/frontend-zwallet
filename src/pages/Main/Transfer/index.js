// import internal modules
import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

const Transfer = () => {
    return (
        <Fragment>
            <article className="bg-white rounded g-0 p-4">
                <div className="g-0 ps-3 fw-bold">Search Receiver</div>
                <div className="bg-light my-3 mx-3 rounded p-3 p-3 d-flex">
                    <img src={require("../../../assets/img/icons/search_loop_search_receiver.svg").default} alt="" />
                    <div className="overflow-hidden position-absolute">
                        <input className="border-0 w-100 bg-transparent ms-5" placeholder="Search receiver here" type="text" onKeyUp={null} />
                    </div>
                </div>
                
            </article>
        </Fragment>
    )
}

export default Transfer
