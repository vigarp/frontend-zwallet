// import internal modules
import React, { Fragment } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// import external modules
import BlueBox from '../../../components/module/BlueBox';
import HistoryBox from '../../../components/module/HistoryBox';


const Home = () => {
  return (
    <Fragment>
            <main className="bg-primary rounded row g-0 p-4">
                <BlueBox
                    balance='goceng'></BlueBox>
                <div className="col flex-grow-0 my-3">
                    <Link to={"/main/topup"} style={{ textDecoration: 'none', color: 'black' }}><div className="d-flex px-2 py-2 bg-light bg-gradient rounded my-3">
                        <img src={require("../../../assets/img/icons/arrowup_blue_homepage.svg").default} alt="" />
                        <div>Topup</div>
                    </div></Link>
                    <Link to={"/main/transfer"} style={{ textDecoration: 'none', color: 'black' }}><div className="d-flex px-2 py-2 bg-light bg-gradient rounded my-3">
                        <img src={require("../../../assets/img/icons/plus_blue_homepage.svg").default} alt="" />
                        <div>Transfer</div>
                    </div></Link>
                </div>
            </main>
            <main className="row g-0 mt-3">
                <article className="bg-white rounded col me-1">
                    <div className="row g-0 p-3">
                        <div className="col d-flex justify-content-start p-1"><img src={require("../../../assets/img/icons/money_in_homepage.svg").default} alt="" /></div>
                        <div className="col d-flex justify-content-end p-1"><img src={require("../../../assets/img/icons/money_out_homepage.svg").default} alt="" /></div>
                    </div>
                    <div className="row g-0">
                        <div className="col d-flex justify-content-center"><img src={require("../../../assets/img/icons/graph_homepage.png")} alt="" /></div>
                    </div>
                </article>
                <article className="bg-white rounded col ms-1">
                    <div className="row g-0 p-3">
                        <div className="col d-flex justify-content-start">
                            <div className="fw-bold">Transactions History</div>
                        </div>
                        <div className="col d-flex justify-content-end">
                            <Link to={"/main/history"} style={{ textDecoartion: 'none' }}>See All</Link>
                        </div>
                    </div>
                        <HistoryBox
                            ></HistoryBox>
                </article>
            </main>
        </Fragment>
  )
}

export default Home