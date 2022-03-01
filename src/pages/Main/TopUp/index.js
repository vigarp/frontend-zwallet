// import internal modules
import React, { Fragment} from 'react';

// import external modules


const TopUp = () => {
  return (
    <Fragment>
      <article className="bg-white rounded g-0 p-4">
        <div className="g-0 ps-3 fw-bold">How To Top Up</div>
        <div className="rounded py-3 bg-light row my-3">
          <div className="col flex-grow-0 px-3 text-primary fw-bold">1. </div>
          <div className="col text-muted">Go to the nearest ATM or you can use E-Banking.</div>
        </div>
        <div className="rounded py-3 bg-light row my-3">
          <div className="col flex-grow-0 px-3 text-primary fw-bold">2. </div>
          <div className="col text-muted">Type your security number on the ATM or E-Banking.</div>
        </div>
        <div className="rounded py-3 bg-light row my-3">
          <div className="col flex-grow-0 px-3 text-primary fw-bold">3. </div>
          <div className="col text-muted">Select “Transfer” in the menu</div>
        </div>
        <div className="rounded py-3 bg-light row my-3">
          <div className="col flex-grow-0 px-3 text-primary fw-bold">4. </div>
          <div className="col text-muted">Type the virtual account number that we provide you at the top.</div>
        </div>
        <div className="rounded py-3 bg-light row my-3">
          <div className="col flex-grow-0 px-3 text-primary fw-bold">5. </div>
          <div className="col text-muted">Type the amount of the money you want to top up.</div>
        </div>
        <div className="rounded py-3 bg-light row my-3">
          <div className="col flex-grow-0 px-3 text-primary fw-bold">6. </div>
          <div className="col text-muted">Read the summary details</div>
        </div>
        <div className="rounded py-3 bg-light row my-3">
          <div className="col flex-grow-0 px-3 text-primary fw-bold">7. </div>
          <div className="col text-muted">Press transfer / top up</div>
        </div>
        <div className="rounded py-3 bg-light row my-3">
          <div className="col flex-grow-0 px-3 text-primary fw-bold">8. </div>
          <div className="col text-muted">You can see your money in Zwallet within 3 hours.</div>
        </div>
      </article>
    </Fragment>
  )
}

export default TopUp