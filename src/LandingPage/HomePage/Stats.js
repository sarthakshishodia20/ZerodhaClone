import React from "react";

function Stats() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-6 mt-5 p-3">
          <h1>Trust With Confidence</h1>
          <h2 className="mb-3">Customer First Always</h2>
          <p className="text-muted mb-4">
            that's why 1.3+ crore customers trust Zerodha with 23.5+ lakh crores
            worth of equity investments.
          </p>
          <h2  className="mb-3">No spams or grimmicks</h2>
          <p  className="text-muted mb-4">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
          </p>
          <h2  className="mb-3">The Zerodha Universe</h2>
          <p  className="text-muted mb-4">
          Not just an appr but a whole ecosystem. Our investments in 30+
          fintech startups offer you tailored services specific to your needs.
          </p>
          <h2 className="mb-3">Do better With money</h2>
          <p  className="text-muted mb-4">
          With initiatives like Nudge and Kill Switch, we don't just facilitate
          transactions, but actively help you do better with your money.
          </p>
        </div>
        <div className="col-6 mt-3">
            <img src='media/images/ecosystem.png' style={{width:"90%"}}/>
            <div>
                <a href="#" className="mx-5 fs-5" style={{paddingLeft:"30px",textDecoration:"none"}}>Explore our products<i class="fa-solid fa-arrow-right"></i></a>
                <a href="#"  className="mx-5 fs-5" style={{paddingLeft:"30px",textDecoration:"none"}}>Try Kite Demo<i class="fa-solid fa-arrow-right"></i></a>
            </div>
        </div>
      </div>
    </div>
  );
}
export default Stats;
