import React from 'react';
 function LeftSection({imageURL,productTitle,productDescription,tryDemo,learnMore,appStore,googlePlay}) {
    return (<div className='conatiner m-2'>
      <div className='row'>

         <div className='col-6  p-5'>
            <img src={imageURL}/>
         </div>
         <div className='col-6 p-5 mt-5' style={{width:"600px",paddingLeft:"200px"}}>
            <h1 className='text-muted'>{productTitle}</h1> 
            <p className='text-muted fs-5' style={{lineHeight:"1.8rem"}}>{productDescription}</p>
            <div>
            <a href='#'  className='p-2'style={{textDecoration:"none",paddingLeft:"20px"}}>Try Demo <i class="fa-solid fa-arrow-right"></i></a>
            <a href='#' className='p-2' style={{textDecoration:"none", paddingLeft:"20px"}}>Learn More <i class="fa-solid fa-arrow-right"></i></a>
            </div>
            <div>
            <a href={googlePlay}><img src='media/images/googlePlayBadge.svg' className='p-2' /></a>
            <a href={appStore}><img src='media/images/appStoreBadge.svg' className='p-2'/></a>
            </div>
         </div>
      </div>
    </div>);
 }

 export default LeftSection;