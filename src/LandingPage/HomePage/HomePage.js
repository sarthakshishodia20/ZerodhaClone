import React from 'react';
import Hero from './Hero';
import Education from './Education';
import Awards from './Awards';
import Pricing from './Pricing';
import Stats from './Stats';
import Footer from '../Footer';
import Navbar from '../Navbar';
import OpenAccount from '../OpenAccount';

function HomePage() {
    return (<><div>
        <Hero/>
        <Awards/>
        <Stats/>
        <Pricing/>
        <Education/>
        <OpenAccount/>
    </div> </> );
}

export default HomePage;