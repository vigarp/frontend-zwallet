// import internal modules
import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// import external modules
import BlueBox from '../../../components/module/BlueBox';
import HistoryBox from '../../../components/module/HistoryBox';
import { GetUserBalance } from '../../../redux/actions/balance';
import { GetUserPhone } from '../../../redux/actions/phone';
import { GetShortHistory } from '../../../redux/actions/shortHistory';
import { PostBalance } from '../../../redux/actions/postBalance';

const Home = () => {
    localStorage.removeItem('tempTransfer');
    const dispatch = useDispatch();

    const balanceData = useSelector((state) => state.balance);
    const phoneData = useSelector((state) => state.phone);
    const shortHistoryData = useSelector((state) => state.shortHistory);

    useEffect(() => {
        dispatch((GetUserBalance()))
        dispatch((GetUserPhone()))
        dispatch((GetShortHistory()))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleTopUp = () => {
        let topUpValue = prompt("Please fill in the balance you want");
        if (topUpValue === null) {
            return;
        } else if (!/^[0-9]+$/.test(topUpValue)) {
            alert("Please fill with a number.");
        } else {
            dispatch((PostBalance(topUpValue)))
            dispatch((GetUserBalance()))
            dispatch((GetShortHistory()))
        }
    }
    return (
        <Fragment>
            <main className="row g-0 p-4 box-blue">
                <BlueBox
                    balanceUser={balanceData?.data}
                    phoneUser={phoneData?.data}></BlueBox>
                <div className="col flex-grow-0 my-3">
                    <div onClick={handleTopUp} className="d-flex mb-3 text-decoration-none text-black transfer-button">
                        <img className="pe-1" src={require("../../../assets/img/icons/arrowup_blue_homepage.svg").default} alt="icon-arrowup-topup" />
                        <div className="fw-bold text-white">Topup</div>
                    </div>
                    <Link to={"/main/transfer"} className="d-flex mt-3 text-decoration-none text-black topup-button">
                        <img className="pe-1" src={require("../../../assets/img/icons/plus_blue_homepage.svg").default} alt="icon-plus-transfer" />
                        <div className="fw-bold text-white">Transfer</div>
                    </Link>
                </div>
            </main>
            <main className="row g-0 mt-3">
                <article className="bg-white col me-1 box-chart">
                    <div className="row g-0 p-3">
                        <div className="col d-flex justify-content-start p-1"><img src={require("../../../assets/img/icons/money_in_homepage.svg").default} alt="icon-money-in" /></div>
                        <div className="col d-flex justify-content-end p-1"><img src={require("../../../assets/img/icons/money_out_homepage.svg").default} alt="icon-money-out" /></div>
                    </div>
                    <div className="row g-0">
                        <div className="col d-flex justify-content-center"><img src={require("../../../assets/img/icons/graph_homepage.png")} alt="icon-graph" /></div>
                    </div>
                </article>
                <article className="bg-white col ms-1 box-history">
                    <div className="row g-0 p-3">
                        <div className="col d-flex justify-content-start">
                            <div className="fw-bold">Transactions History</div>
                        </div>
                        <div className="col d-flex justify-content-end">
                            <div className="text-decoration-none"><Link to={"/main/history"} style={{ textDecoration: 'none' }}>See All</Link></div>
                        </div>
                    </div>
                    {shortHistoryData?.data.map((item, index) => (
                        <HistoryBox
                            key={index}
                            picture={item.picture}
                            amount={item.amount}
                            username={item.username}
                            type={item.type_detail}
                        ></HistoryBox>
                    ))}
                </article>
            </main>
        </Fragment>
    )
}

export default Home