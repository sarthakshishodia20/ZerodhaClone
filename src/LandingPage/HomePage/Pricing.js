import React from 'react';

function Pricing() {
    return (<div className='container mt-5 pt-4 mb-5'>
        <div className='row'>
            <div className='col-4'>
                <h1 className='p-1'>
                Unbeatable pricing
                </h1>
                <p className='fs-6 p-4'>We pioneered the concept of discount broking and price
                transparency in India. Flat fees and no hidden charges.</p>
                <a href="#" className="fs-5" style={{paddingLeft:"0px",textDecoration:"none"}}>See Pricing <i class="fa-solid fa-arrow-right"></i></a>

            </div>
            <div className='col-2'></div>
            <div className='col-6'>
                <div className='row'>
                <div className='col text-center border p-5'>
                    <h1>₹0</h1>
                    <p className='fs-5'>Free equity delivery and
                    direct mutual funds</p>
                </div>
                <div className='col text-center border p-5'>
                    <h1>₹20</h1>
                    <p className='fs-5'>Intraday and F&O</p>
                </div>
                </div>
            </div>

        </div>

        </div> );
}
export default Pricing;