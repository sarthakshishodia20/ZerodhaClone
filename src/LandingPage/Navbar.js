import React from 'react';
import {Link} from 'react-router-dom';
function Navbar() {
    return (
        
            <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom w-100 container sticky-top">
                <Link className="navbar-brand" to="/">
                    <img src='media/images/logo.svg' alt='logoZerodha' style={{ width: "30%" }} />
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="form-inline my-2 my-lg-0">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/signup">Sign Up<span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/aboutPage">About</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/pricingPage">Pricing</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/productPage">Products</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/supportPage">Support</Link>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" to="#"><i className="fa-solid fa-bars"></i></a>
                            </li>
                        </ul>
                    </form>
                </div>
            </nav>
    );
}

export default Navbar;
