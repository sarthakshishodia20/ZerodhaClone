import React from 'react';

function Hero() {
    return (<div className='container'>
        <div className='row text-center mt-5 p-5 border-bottom'>
            <h1 className='p-1'>Pricing</h1>
            <p className='text-muted'>Free equity investments and flat 220 traday and F&O trades</p>
        </div>
        <div className='row text-center border-bottom mb-5 pb-5 pt-5'>
            <div className='col-4 p-3'>
                <img src='media/images/pricing0.svg' style={{width:"350px"}}/>
                <h2>Free Equity Delivery</h2>
                <p className='text-muted'>
                All equity delivery invcstmcnts (NSE, BSE),
                arc absolutely free — C brokcragc.
                </p>
            </div>
            <div className='col-4 p-3'>
                <img src='media/images/pricing20.svg' style={{width:"350px"}}/>
                <h2>Intraday and F&O trades</h2>
                <p className='text-muted'>Flat Rs. 20 or 0.03% (whichever is lower)
per executed order on intraday trades
across equity, currency, and commodity
trades.</p>
            </div>
            <div className='col-4 p-3'>
                <img src='media/images/pricingMF.svg' style={{width:"350px"}}/>
                <h2>Free Direct MF</h2>
                <p className='text-muted'>All direct mutual fund investments are absolutely free
                commissions & DP charges.</p>
            </div>
        </div>
    </div>);
}

export default Hero;