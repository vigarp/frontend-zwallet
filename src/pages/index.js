import React, { Fragment } from 'react';
import { Link, Navigate } from 'react-router-dom';

const LandingPage = () => {
  const auth = localStorage.getItem('token');
  if (auth) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/main/home" />;
  }
  return (
    <Fragment>
      <div className="landing-first">
        <div className="container-md d-md-flex justify-content-md-between p-3">
          <div className="text-white fs-3 fw-bold d-none d-md-block">Zwallet</div>
          <div className="row flex-grow-0">
            <Link to={"/auth/login"} className="btn-login-banner col flex-md-grow-0 fw-bold text-decoration-none text-white" >Login</Link>
            <Link to={"/auth/signup"} className="btn-signup-banner col fw-bold text-decoration-none">Sign Up</Link>
          </div>
        </div>
        <div className="title-area d-flex flex-column justify-content-center align-items-center">
          <div className="text-brand d-md-none text-center">Zwallet</div>
          <div className="front-title text-center text-banner text-white mb-5 mt-5 d-none d-md-block">Awesome App<br /> For Saving Time.</div>
          <div className="front-title text-center text-banner-small text-white">We bring you a mobile app for banking problems that<br className="d-none d-md-block" /> oftenly wasting much of your times.</div>
          <Link to={"/auth/signup"} className="text-center btn-try mt-5 fw-bold text-decoration-none">Try it Free</Link>
        </div>
      </div>
      <div class="landing-second">
        <div class="container d-flex flex-column justify-content-center align-items-center">
          <div class="text-center text-banner mt-5 d-none d-md-block"><span class="text-primary">Why</span> Choose Zwallet?</div>
          <div class="text-center text-brand text-black mt-5 d-md-none"><span class="text-primary">Why</span> Choose Zwallet?</div>
          <div class="text-center text-banner-small mt-3">We have some great features from the application and it's totally free<br /> to use by all users around the world.</div>
        </div>
        <div class="container-md carousel d-md-flex mt-5 pb-5">
          <div class="text-center m-1 p-5 lh-lg">
            <img src={require("../assets/img/icons/phone_landingpage.svg").default} alt="icon-phone-landingpage" />
            <h5 class="p-3 fw-bold">24/7 Support</h5>
            <div>We have 24/7 contact support so you can contact us whenever you want and we will respond it.</div>
          </div>
          <div class="container-center text-center m-1 p-5 lh-lg">
            <img src={require("../assets/img/icons/lock_landingpage.svg").default} alt="icon-lock-landingpage" />
            <h5 class="p-3 fw-bold">Data Privacy</h5>
            <div>We make sure your data is safe in our database and we will encrypt any data you submitted to us.</div>
          </div>
          <div class="text-center m-1 p-5 lh-lg">
            <img src={require("../assets/img/icons/download_landingpage.svg").default} alt="icon-download-landingpage" />
            <h5 class="p-3 fw-bold">Easy Download</h5>
            <div>Zwallet is 100% totally free to use it's now available on Google Play Store and App Store.</div>
          </div>
        </div>
      </div>
      <div class="landing-third">
        <div class="container text-center p-5">
          <img src={require("../assets/img/icons/microsoft_landingpage.svg").default} alt="icon-microsoft" />
          <img src={require("../assets/img/icons/dropbox_landingpage.svg").default} alt="icon-dropbox" />
          <img src={require("../assets/img/icons/hnm_landingpage.svg").default} alt="icon-hnm" />
          <img src={require("../assets/img/icons/airbnb_landingpage.svg").default} alt="icon-airbnb" />
          <img src={require("../assets/img/icons/canon_landingpage.svg").default} alt="icon-canon" />
          <img src={require("../assets/img/icons/dell_landingpage.svg").default} alt="icon-dell" />
        </div>
      </div>
      <div class="landing-fourth d-none d-lg-block">
        <div class="container">
          <div class="amount-title text-center text-money-lp">Rp. 390.736.500</div>
          <div class="text-center text-banner mt-5"><span class="text-primary">Money</span> has Been Transfered.</div>
          <div class="text-center text-banner-small my-5">That amount of money has been transfered from all users. We still<br /> counting and going strong!</div>
        </div>
      </div>
      <div class="landing-fifth d-none d-lg-block">
        <div class="d-flex">
          <div class="inner-left">
            <img src={require("../assets/img/landing-phonebanner.svg").default} alt="icon-phonebanner-lp" />
          </div>
          <div class="inner-right ms-5">
            <div class="text-banner cover-inner">All The <span class="text-primary">Great</span><br />Zwallet Features.</div>
            <div class="box-inner lh-lg p-3">
              <div class="text-banner-small fw-bold mb-3"><span class="text-primary me-1">1.</span> Small Fee</div>
              <div class="text-banner-small">We only charge 5% of every success transaction done in Zwallet app.</div>
            </div>
            <div class="box-inner lh-lg p-3">
              <div class="text-banner-small fw-bold mb-3"><span class="text-primary me-1">2.</span> Data Secured</div>
              <div class="text-banner-small">All your data is secured properly in our system and it’s encrypted.</div>
            </div>
            <div class="box-inner lh-lg p-3">
              <div class="text-banner-small fw-bold mb-3"><span class="text-primary me-1">3.</span> User Friendly</div>
              <div class="text-banner-small">Zwallet come up with modern and sleek design and not complicated.</div>
            </div>
          </div>
        </div>
      </div>
      <div class="landing-sixth d-none d-md-block">
        <div class="text-center text-banner pt-3">What Users are <span class="text-primary">Saying.</span></div>
        <div class="text-center text-banner-small mt-5 mb-5">We have some great features from the application and it's
          totally free<br /> to use by all users around the world.</div>
        <div class="d-flex justify-content-center mb-5">
          <div class="review-box-arrow d-flex align-self-center">
            <img src={require("../assets/img/icons/arrowleft_landingpage.svg").default} alt="icon-arrowleft-lp" />
          </div>
          <div class="review-box-center ms-5 me-5">
            <img class="mt-3" src={require("../assets/img/pictures/alex_hansinburg_landingpage.png")} alt="pic-alexh-lp" />
            <div class="fw-bold my-3">Alex Hansinburg</div>
            <div class="my-5">Designer</div>
            <div class="text-center text-muted">“This is the most outstanding app that I've ever try in my live,
              this app is such an amazing masterpiece and<br /> it's suitable for you who is bussy with their
              bussiness and must transfer money to another person aut there.<br /> Just try this app and see the
              power!”</div>
          </div>
          <div class="review-box-arrow d-flex align-self-center">
            <img src={require("../assets/img/icons/arrowright_landingpage.svg").default} alt="icon-arrowright-lp" />
          </div>
        </div>
      </div>
      <div class="landing-footer">
        <div class="container">
          <div class="text-white fs-3 fw-bold py-5">Zwallet</div>
          <div class="text-left text-light">Simplify financial needs and saving<br /> much time in banking needs
            with<br /> one single app.</div>
          <hr class="text-white" />
          <div class="d-sm-flex">
            <div class="text-light flex-grow-1 p-3">2022 Zwallet. All right reserved.</div>
            <div class="text-light p-3">+62-5637-8882-9901</div>
            <div class="text-light p-3">contact@zwallet.com</div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default LandingPage