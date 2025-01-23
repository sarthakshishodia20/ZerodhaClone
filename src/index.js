import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ScrollToTop from './LandingPage/ScrollToTop';
// import App from './App';
import HomePage from './LandingPage/HomePage/HomePage';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
// import reportWebVitals from './reportWebVitals';
import SignupPage from './LandingPage/SignUp/SignupPage';
import ProductPage from './LandingPage/Products/ProductPage';
import AboutPage from './LandingPage/About/AboutPage';
import PricingPage from './LandingPage/Pricing/PricingPage';
import SupportPage from './LandingPage/Support/SupportPage';
import Navbar from './LandingPage/Navbar';
import Footer from './LandingPage/Footer';
import Error404 from './ErrorPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/signup' element={<SignupPage/>}/>
      <Route path='productPage' element={<ProductPage/>}/>
      <Route path='aboutPage' element={<AboutPage/>}/>
      <Route path='pricingPage' element={<PricingPage/>}/>
      <Route path='supportPage' element={<SupportPage/>}/>
      <Route path='*' element={<Error404/>}/>;
    </Routes>
    <Footer/>
  </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
