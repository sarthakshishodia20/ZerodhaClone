import React from "react";

function Brokerage() {
  return (
    <div className="container mt-4">
        <br></br>
        <hr></hr>
      <div className="row">
        <div className="col-8 p-5">
          <h5 className="text-center">
            <a style={{ textDecoration: "none" }} href="#">
              Brokerage Calculator
            </a>
          </h5>
          <ul className="pt-4" style={{ listStyleType: "disc", paddingLeft: "20px" ,lineHeight:"25px"}}>
            <li>
              Call & Trade and RMS auto-squareoff: Additional charges of + GST
              per order.
            </li>
            <li>Digital contract notes will be sent via e-mail.</li>

            <li>
              Physical copies of contract notes, if required, shall be charged
              per contract note. Courier charges apply.
            </li>

            <li>
              For NRI account (non-PIS), 0.5% or ?100 per executed order for
              equity (whichever is lower).
            </li>

            <li>
              For NRI account (PIS), 0.5% or ?200 per executed order for equity
              (whichever is lower).
            </li>

            <li>
              If the account is in debit balance, any order placed will be
              charged e40 per executed order instead of per executed order.
            </li>
          </ul>
        </div>
        <div className="col-4 p-5">
          <h5 className="text-center">
            <a style={{ textDecoration: "none" }} href="#">
              List Of Charges
            </a>
          </h5>
        </div>
      </div>
      <hr></hr>
      <br></br>
    </div>
  );
}

export default Brokerage;
