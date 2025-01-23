import React from "react";

function RightSection({ imageURL, productName, productDesc }) {
  return (
    <div className="container">
      <div className="row">
        <div
          className="col-6"
          style={{ width: "600px", paddingLeft: "200px", marginTop: "200px" }}
        >
          <h1 className="text-muted">{productName}</h1>
          <p className="text-muted fs-5" style={{ lineHeight: "1.8rem" }}>
            {productDesc}
          </p>
          <div>
            <a
              href="#"
              className="p-2"
              style={{ textDecoration: "none", paddingLeft: "20px" }}
            >
              Try Demo <i className="fa-solid fa-arrow-right"></i>
            </a>
            <a
              href="#"
              className="p-2"
              style={{ textDecoration: "none", paddingLeft: "20px" }}
            >
              Learn More <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
        <div className="col-6 p-5">
          <img src={imageURL} alt="Product" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
