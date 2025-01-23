import React from 'react';

function Hero() {
    return (<div className='container'>
        <div className='row text-center p-5 m-5'>
            <h1>Technology</h1>
            <p className='fs-4 text-muted'>Sleek, modern, and intuitive trading platforms</p>
            <p className='fs-5'>Check out our <a href='#' style={{textDecoration:"none"}}>investment offerings <i class="fa-solid fa-arrow-right"></i></a></p>
        </div>
        <hr></hr>
    </div>);
}
export default Hero;