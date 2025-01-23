import React from 'react';

function Hero() {
    return (<div className='container text-center mb-5'>
        <div className='row'>
            <img src='media/images/homeHero.png' alt='Hero Image'/>
            <h1 className='p-0 pt-5 fs-1' >Invest in Everything</h1>
            <p className='fs-4'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
            <button className='btn btn-primary' style={{width:"30%",margin:"0 auto", fontSize:"20px"}}>SignUp Now</button>
        </div>
    </div>);
}

export default Hero;