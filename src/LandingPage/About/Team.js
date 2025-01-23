import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row text-center m-4 p-5">
        <h1>People</h1>
      </div>
      <div className="row">
        <div className="col-6 text-center">
          <img
            src="media/images/nithinKamath.jpg"
            style={{ borderRadius: "100%", height: "300px", marginLeft: "20px" }}
            alt="Nithin Kamath"
          />
          <p className="text-muted p-2" style={{ paddingLeft: "20px", marginTop: "20px", fontWeight: "bold" }}>Nithin Kamath</p>
          <p style={{ fontWeight: "bold", marginTop: "-10px" }}>Founder & CEO</p>
        </div>
        <div className="col-6">
          <p className="text-muted fs-5" style={{ lineHeight: "1.8rem" }}>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade-long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>

          <p className="text-muted fs-5" style={{ lineHeight: "1.8rem" }}>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>

          <p className="text-muted fs-5" style={{ lineHeight: "1.8rem" }}>Playing basketball is his zen.</p>
          <p className="text-muted fs-5" style={{ lineHeight: "1.8rem" }}>
            Connect on <a href="#" style={{ textDecoration: "none" }}>Homepage</a> / <a style={{ textDecoration: "none" }} href="#">TradingQnA</a> /
            <a style={{ textDecoration: "none" }} href="#">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
