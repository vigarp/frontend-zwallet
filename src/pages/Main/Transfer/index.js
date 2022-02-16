// import internal modules
import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

const Transfer = () => {
    const navigate = useNavigate();

    const tokenUser = localStorage.getItem('token');
    const [contactUser, setContactuser] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const querySearch = searchParams.get('search');

    useEffect(() => {
        if (querySearch) {
            axios.get(`${process.env.REACT_APP_URL_BACKEND}/users?limit=5&name=${querySearch}`,
            {
                headers: {
                    Authorization: 'Bearer ' + tokenUser
                }
            })
            .then((res) => {
                const resultSearch = res.data.data;
                if (resultSearch) {
                    setContactuser(resultSearch);
                } else {
                    setContactuser([])
                }
            })
            .catch((err) => {
                console.log(err.response)
            })
        } else {
            axios.get(`${process.env.REACT_APP_URL_BACKEND}/users`,
                {
                    headers: {
                        Authorization: 'Bearer ' + tokenUser
                    }
                })
                .then((res) => {
                    const resultContacts = res.data.data;
                    setContactuser(resultContacts);
                })
                .catch((err) => {
                    console.log(err.response)
                })
        }
    }, [querySearch]);
    const handleSearch = (e) => {
        if (e.key === 'Enter') {
            setSearchParams({search: e.target.value})
        }
    }
    return (
        <Fragment>
            <article className="bg-white rounded g-0 p-4">
                <div className="g-0 ps-3 fw-bold">Search Receiver</div>
                <div className="bg-light my-3 mx-3 rounded p-3 p-3 d-flex">
                    <img src={require("../../../assets/img/icons/search_loop_search_receiver.svg").default} alt="" />
                    <div className="overflow-hidden position-absolute">
                        <input className="border-0 w-100 bg-transparent ms-5" placeholder="Search receiver here" type="text" onKeyUp={handleSearch} />
                    </div>
                </div>
                {contactUser.map((item, index) => (
                    <div className="rounded row g-0 me-3 my-4 user-pointer" key={index} onClick={() => navigate(`/main/transfer/${item.id}`)}>
                        <div className="col flex-grow-0 px-3"><img src={item.picture} width={60} height={60} alt='' /></div>
                        <div className="col lh-lg">
                            <div className="fw-bold">{item.username}</div>
                            <div className="text-muted">{item.email}</div>
                        </div>
                    </div>
                ))}
            </article>
        </Fragment>
    )
}

export default Transfer
