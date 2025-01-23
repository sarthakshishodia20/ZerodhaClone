import React from 'react';

function Hero() {
    return (<div className='container'>
        <div className='row mt-5 mb-5 p-5 text-center border-bottom' style={{height:"270px"}}>
            <h1>We pioneered the discount broking model in India.
            Now, we are breaking ground with our technology.</h1>
        </div>
        <div className='row'>
            <div className='col-5'>
                <p className='text-muted fs-5 mx-5' style={{lineHeight:"1.8rem",width:"500px"}}>We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.</p>
                <p className='text-muted fs-5 mx-5' style={{lineHeight:"1.8rem",width:"500px"}}>Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.</p>
                <p className='text-muted fs-5 mx-5' style={{lineHeight:"1.8rem",width:"500px"}}>Over 1+ Crore clients place millions of orders every day through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.</p>
            </div>
            <div className='col-1'></div>
            <div className='col-5'>
                <p className='text-muted fs-5 mx-5' style={{lineHeight:"1.8rem",width:"500px"}}>In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.</p>
                <p className='text-muted fs-5 mx-5' style={{lineHeight:"1.8rem",width:"500px"}}><a href='#' style={{textDecoration:"none"}}>Rainmatter</a>, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.</p>
                <p className='text-muted fs-5 mx-5' style={{lineHeight:"1.8rem",width:"500px"}}>And yet, we are always up to something new every day. Catch up on the latest updates on our blog or see what the media is <a href='#' style={{textDecoration:"none"}}>saying about us</a>.</p>
            </div>
        </div>
    </div> );
}

export default Hero;