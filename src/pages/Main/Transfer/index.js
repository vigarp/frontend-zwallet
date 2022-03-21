// import internal modules
import React, { Fragment, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { decodeToken } from 'react-jwt';
// import external modules
import { GetContacts } from '../../../redux/actions/contacts';

const Transfer = () => {
    localStorage.removeItem('tempTransfer');
    const tokenUser = localStorage.getItem("token")
    const userInfo = decodeToken(tokenUser)
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const contactsData = useSelector((state) => state.contacts)
    const [searchParams, setSearchParams] = useSearchParams();
    const querySearch = searchParams.get('search');
    const queryPage = searchParams.get('page');

    useEffect(() => {
        dispatch(GetContacts(querySearch, queryPage))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [querySearch, queryPage])
    const handleSearch = (e) => {
        if (e.key === 'Enter') {
            setSearchParams({ search: e.target.value })
        }
    }
    let pages = []
    for (let i = 1; i <= contactsData.data.message?.totalPage; i++) {
        pages.push(i)
    }
    
    const contactsFiltered = contactsData.data.data?.filter(identity => identity.id !== userInfo.id)

    return (
        <Fragment>
            <article className="bg-white content-inner g-0 p-4">
                <div className="g-0 ps-3 fw-bold">Search Receiver</div>
                <div className="search-box">
                    <img src={require("../../../assets/img/icons/search_loop_search_receiver.svg").default} alt="icon-serchloop" />
                    <div className="overflow-hidden position-absolute form-input">
                        <input className="border-0 w-100 bg-transparent" placeholder="Search receiver here" type="text" onKeyUp={handleSearch} />
                    </div>
                </div>
                {contactsFiltered?.length !== 0 ? (
                    <>
                        {contactsFiltered?.map((item, index) => (
                            <div className="row g-0 me-3 my-4 box-persons" key={index} onClick={() => navigate(`/main/transfer/${item.id}`)}>
                                <div className="col flex-grow-0 px-3"><img className="rounded" src={item.picture} width={60} height={60} alt='' /></div>
                                <div className="col lh-lg">
                                    <div className="fw-bold">{item.username}</div>
                                    <div className="text-muted">{item.email}</div>
                                </div>
                            </div>
                        ))}
                    </>
                ) : (
                    <>
                    <div className="text-error text-center">Contacts not Found</div>
                    </>
                )}

                {!querySearch ? (
                    <div className="d-flex justify-content-center">
                        {pages.map((item, index) => (
                            <div key={index} className="px-3 text-primary user-pointer" onClick={() => navigate(`/main/transfer?page=${item}`)}>{item}</div>
                        ))}
                    </div>
                ) : ''}

            </article>
        </Fragment>
    )
}

export default Transfer
