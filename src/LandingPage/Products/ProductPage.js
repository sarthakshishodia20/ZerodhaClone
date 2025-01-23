import React from 'react';
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';
import Navbar from '../Navbar';
import Footer from '../Footer';
function ProductPage() {
    return (<>
    <div>
        <Hero/>
        <LeftSection
        imageURL="media/images/kite.png"
        productTitle="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        googlePlay="https://play.google.com/store/search?q=Kite&c=apps"
        appStore="https://apps.apple.com/in/app/zerodha-kite-trade-invest/id1449453802"

        />
        <RightSection
        imageURL="media/images/console.png"
        productName="Console"
        productDesc="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        />
        <LeftSection
        imageURL="media/images/coin.png"
        productTitle="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        googlePlay="https://play.google.com/store/search?q=Coin%20zerodha&c=apps"
        appStore="https://apps.apple.com/in/app/zerodha-coin-mutual-funds/id1392892554"

        />
        <RightSection
        imageURL="media/images/kiteconnect.png"
        productName="Kite Connect API"
        productDesc="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        />
        <LeftSection
        imageURL="media/images/varsity.png"
        productTitle="Varsity Mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.varsity"
        appStore="https://apps.apple.com/in/app/varsity-by-zerodha/id1474610753"
        />
        
        <Universe/>
        
    </div>
     </>  );
}

export default ProductPage;