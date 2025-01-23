import React from 'react';

function Error404() {
    return (<div className='container text-center mt-5 mb-5' style={{backgroundColor:"lightBlue", border:"2px solid lightBlue", borderRadius:"30px", height:"160px",}}>;
        <div className='row'>
        <h1>404 , Not Found</h1>
        <p>Sorry , the page you are looking for does not exist</p>
        </div>
    </div>);
}

export default Error404;