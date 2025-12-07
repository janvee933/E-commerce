import React from 'react';
import Newsletter from '../components/Newsletter';
import banner from '../assets/banner.png';
import a6 from '../assets/banner2.png'; // Placeholder for about image
import f1 from '../assets/freeShipping.png';
import f2 from '../assets/onlineshopping.png';
import f3 from '../assets/savemoney.png';
import f4 from '../assets/promotion.png';
import f5 from '../assets/happysell.png';
import f6 from '../assets/service.png';

const About = () => {
    return (
        <>
            <section id="page-header" style={{ backgroundImage: `url(${banner})` }}>
                <h2>#KnowUs</h2>
                <p>Lorem ipsum dolor sit amet, consectetur</p>
            </section>

            <section id="about-head" className="section-p1">
                <img src={a6} alt="" />
                <div>
                    <h2>Who We Are?</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <abbr title="">Create stunning images with as much or as little control as you
                        like thanks to a choice of Basic and Creative modes.</abbr>
                    <br /><br />
                    <marquee bgcolor="#ccc" loop="-1" scrollamount="5" width="100%">Create stunning images with as much or as little control as you
                        like thanks to a choice of Basic and Creative modes.</marquee>
                </div>
            </section>

            <section id="about-app" className="section-p1">
                <h1>Download Our <a href="#">App</a></h1>
                <div className="video">
                    <video autoPlay muted loop src=""></video>
                </div>
            </section>

            <section id="feature" className="section-p1">
                <div className="fe-box">
                    <img src={f1} alt="" />
                    <h6>Free Shipping</h6>
                </div>
                <div className="fe-box">
                    <img src={f2} alt="" />
                    <h6>Online Order</h6>
                </div>
                <div className="fe-box">
                    <img src={f3} alt="" />
                    <h6>Save Money</h6>
                </div>
                <div className="fe-box">
                    <img src={f4} alt="" />
                    <h6>Promotions</h6>
                </div>
                <div className="fe-box">
                    <img src={f5} alt="" />
                    <h6>Happy Sell</h6>
                </div>
                <div className="fe-box">
                    <img src={f6} alt="" />
                    <h6>F24/7 Support</h6>
                </div>
            </section>

            <Newsletter />
        </>
    );
};

export default About;
