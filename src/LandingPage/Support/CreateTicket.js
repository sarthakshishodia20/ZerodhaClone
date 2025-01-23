import React from 'react';

function CreateTicket() {
    return (<div className='container'>
        <div className='row'>
            <h2 >To create a ticket, select a relevant topic</h2>
        </div>
        <div className='row'>
            <div className='col-4 p-5'>
                <h3 class='account'><i class="fa-solid fa-users"></i> Account Opening</h3>
                <ul>
                    <li><a  style={{color:"#2a7edd"}} href='#'>Getting Started</a></li>
                    <li><a   style={{color:"#2a7edd"}}href='#'>Online</a></li>
                    <li><a   style={{color:"#2a7edd"}}href='#'>Offline</a></li>
                    <li><a   style={{color:"#2a7edd"}}href='#'>Charges</a></li>
                    <li><a   style={{color:"#2a7edd"}}href='#'>Company,Partenership & HUF</a></li>
                    <li><a   style={{color:"#2a7edd"}}href='#'>Not Residant Indian (NRI)</a></li>
                </ul>
            </div>
            <div className='col-4 p-5'>
            <h3 class='account'><i class="fa-regular fa-user"></i> Your Zerodha Account</h3>
                <ul>
                    <li><a  style={{color:"#2a7edd"}} href='#'>Login Credentials</a></li>
                    <li><a  style={{color:"#2a7edd"}} href='#'>Your Profile</a></li>
                    <li><a  style={{color:"#2a7edd"}} href='#'>Account modification & Segment Addition</a></li>
                    <li><a  style={{color:"#2a7edd"}} href='#'>CMR & ICDP</a></li>
                    <li><a  style={{color:"#2a7edd"}} href='#'>Nomination</a></li>
                    <li><a  style={{color:"#2a7edd"}} href='#'>transfer & Conversion of Shares</a></li>
                </ul>
            </div>
            <div className='col-4 p-5'>
            <h3 class='account'><i class="fa-solid fa-chart-simple"></i> Trading & Market</h3>
                <ul>
                    <li><a style={{color:"#2a7edd"}} href='#'>trading FAQs</a></li>
                    <li><a style={{color:"#2a7edd"}} href='#'>Kite</a></li>
                    <li><a  style={{color:"#2a7edd"}}href='#'>Margins</a></li>
                    <li><a style={{color:"#2a7edd"}}href='#'>Product and Other Types</a></li>
                    <li><a style={{color:"#2a7edd"}}href='#'>Corporate Actions</a></li>
                    <li><a style={{color:"#2a7edd"}}href='#'>Kite Features</a></li>
                </ul>
            </div>
        </div>
        <div className='row'>
            <div className='col-4 p-5'>
                <h3 class='account'><i class="fa-regular fa-envelope"></i> Funds</h3>
                <ul>
                    <li><a  style={{color:"#2a7edd"}} href='#'>Fund withdrawl</a></li>
                    <li><a   style={{color:"#2a7edd"}}href='#'>Adding funds</a></li>
                    <li><a   style={{color:"#2a7edd"}}href='#'>Adding bank accounts</a></li>
                    <li><a   style={{color:"#2a7edd"}}href='#'>eMandates</a></li>
                </ul>
            </div>
            <div className='col-4 p-5'>
            <h3 class='account'><i class="fa-solid fa-compact-disc"></i> Console</h3>
                <ul>
                    <li><a  style={{color:"#2a7edd"}} href='#'>IPO</a></li>
                    <li><a  style={{color:"#2a7edd"}} href='#'>Portfolio</a></li>
                    <li><a  style={{color:"#2a7edd"}} href='#'>funds Statement</a></li>
                    <li><a  style={{color:"#2a7edd"}} href='#'>Profile</a></li>
                    <li><a  style={{color:"#2a7edd"}} href='#'>Report</a></li>
                    <li><a  style={{color:"#2a7edd"}} href='#'>Referal Program</a></li>
                </ul>
            </div>
            <div className='col-4 p-5'>
            <h3 class='account'><i class="fa-brands fa-bitcoin"></i> Coins</h3>
                <ul>
                    <li><a style={{color:"#2a7edd"}} href='#'>understanding Mutual Funds and coins</a></li>
                    <li><a style={{color:"#2a7edd"}} href='#'>Coin app</a></li>
                    <li><a  style={{color:"#2a7edd"}}href='#'>Coin web</a></li>
                    <li><a style={{color:"#2a7edd"}}href='#'>Transactions</a></li>
                    <li><a style={{color:"#2a7edd"}}href='#'>Reports</a></li>
                    <li><a style={{color:"#2a7edd"}}href='#'>Zerodha Coins</a></li>
                </ul>
            </div>
        </div>
    </div>);
}

export default CreateTicket;