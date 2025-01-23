import React from 'react';

function Hero() {
    return (<div className='container-fluid mb-5' id="support">
        <div className='row'>
            <div className='col-6 p-5'>
                <h1>Support Portal</h1>
                <p className='fs-4 pt-3'>Search for an answer or browse help topics to create a ticket</p>
                <input id="supportInput" type='text' placeholder=' Eg: how do i activate F&O, why is my order getting rejected ...'/><i class="fa-solid fa-magnifying-glass"></i>
                <a class="supportLink" href='#'>track Account opening</a>
                <a class="supportLink" href='#'>track Segment activation</a>
                <a  class="supportLink"href='#'>Intraday margins</a>
                <br></br>
                <a  class="supportLink"href='#'>Kite user manual</a>
            </div>
            <div className='col-6 p-5'>
                <p className='text-center fs-5' style={{textDecoration:"underline", paddingLeft:"26%"}}>track tickets</p>
                <h3 className='fs-3 p-5' style={{marginTop:"2rem"}}>Featured</h3>
                <a style={{color:"white"}}className='fs-4 p-3 my-1'href='#'>1.) Offer for sale (OFS) - September 2024</a><br></br><br></br>
                <a style={{color:"white"}}className='fs-4 p-3 my-1' href='#'>2.) Latest Intraday leverages and Square-off timings</a>
                

            </div>
            
        </div>
    </div>);
}

export default Hero;