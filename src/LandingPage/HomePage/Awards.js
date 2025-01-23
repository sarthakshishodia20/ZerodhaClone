import React from 'react';

function Awards() {
    return (
        <div className='container mt-5 pt-4'>
            <div className='row'>
                <div className='col-6'>
                    <img src='media/images/largestBroker.svg' alt='Broker'/>
                </div>
                <div className='col-6'>
                    <h1>Largest Stock Broker in India</h1>
                    <p className='mt-3 fs-4 '> 2+ million Zerodha clients contribute to over 15% of all retail order
                    volumes in India daily by trading and investing in</p>
                    <div className='row'>
                        <div className='col-6 mt-3'>
                            <ul>
                                <li><p>Future & Options</p></li>
                                <li><p>Comodity Derivatives</p></li>
                                <li><p>Currency Derivatives</p></li>
                            </ul>
                        </div>
                        <div className='col-6 mt-3'>
                            <ul>
                                <li><p>Stocks & IPO's</p></li>
                                <li><p>Direct Mutual Funds</p></li>
                                <li><p>Bonds and Government</p></li>
                            </ul>
                        </div>
                    </div>
                    <img  className='p-2 mt-1' src='media/images/pressLogos.png' style={{width:"80%"}}/>
                </div>
            </div>
        </div>
    );
}
export default Awards;