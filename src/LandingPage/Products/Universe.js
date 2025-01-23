import React from "react";

function Universe() {
  return (
    <div className="container m-5">
      <div className="row text-center p-4">
        <h1>The Zerodha Universe</h1>
        <p className="text-muted fs-5 p-4">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>
      <div className="row p-5">
        <div className="col-4 text-center p-3">
          <img
            src="media/images/zerodhaFundhouse.png"
            className="p-2"
            style={{ width: "230px" }}
          />
          <p className="text-muted fs-6">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4">
          <img
            src="media/images/sensibullLogo.svg"
            className="p-3"
            style={{ width: "300px" }}
          />
          <p className="text-muted fs-6">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-4">
          <img
            src="media/images/goldenpiLogo.png"
            className="p-3"
            style={{ width: "230px", paddingTop: "20px" }}
          />
          <p className="text-muted fs-6">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
      </div>
      <div className="row text-center">
        <div className="col-4">
          <img
            src="media/images/streakLogo.png"
            className="p-2"
            style={{ width: "230px" }}
          />
          <p className="text-muted fs-6">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col-4">
          <img
            src="media/images/smallcaseLogo.png"
            className="p-2"
            style={{ width: "230px" }}
          />
          <p className="text-muted fs-6">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4">
          <img
            src="media/images/dittoLogo.png"
            className="p-2"
            style={{ width: "170px" }}
          />
          <p className="text-muted fs-6">
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Universe;
