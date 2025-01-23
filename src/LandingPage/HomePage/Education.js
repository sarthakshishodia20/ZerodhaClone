import React from 'react';

function Education() {
    return ( <div className='container mb-5'>
        <div className='row'>
            <div className='col-6'>
                <img src='media/images/education.svg' alt='education'/>
            </div>
            <div className='col-6'>
                <h1 className='pt-3 mt-5'>Free and open market education</h1>
                <p className='p-3 fs-5'>Varsity, the largest online stock market education book in the world
                covering everything from the basics to advanced trading.</p>
                <a href="#" className="fs-5" style={{paddingLeft:"0px",textDecoration:"none"}}>Versity <i class="fa-solid fa-arrow-right"></i></a>
                <p className='p-3 fs-5'>TradingQRA, the most active trading and investment community in
                India for all your market related queries.</p>
                <a href="#" className="fs-5" style={{paddingLeft:"0px",textDecoration:"none"}}>Trading Q&A <i class="fa-solid fa-arrow-right"></i></a>
            </div>
        </div>
    </div>);
}

export default Education;