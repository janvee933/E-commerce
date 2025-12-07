import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/myntraLogo.png';
import appStore from '../assets/applestore.png';
import googleStore from '../assets/googlestore.png';
import pay from '../assets/pay.png';

const Footer = () => {
    return (
        <footer className="section-p1">
            <div className="col">
                <img className="logo" src={logo} alt="logo" width="50px" height="40px" />
                <h4>Contact</h4>
                <p><strong>Address:</strong> 562 Wellington Road, Street 32, san Francisco</p>
                <p><strong>Phone:</strong> +1 2222 365 /(+91) 01 2345 6789</p>
                <p><strong>Hours:</strong> 10:00 - 18:00, Mon - Sat</p>
                <div className="follow">
                    <h4>Follow</h4>
                    <div className="icon">
                        <i className="fa-brands fa-facebook-f"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-linkedin-in"></i>
                    </div>
                </div>
            </div>
            <div className="col">
                <h4>About</h4>
                <Link to="/about">About us</Link>
                <Link to="#">Delivery Information</Link>
                <Link to="#">Privacy Policy</Link>
                <Link to="#">Terms & Conditions</Link>
                <Link to="/contact">Contact Us</Link>
            </div>

            <div className="col">
                <h4>My Account</h4>
                <Link to="#">Sign in</Link>
                <Link to="/cart">View Cart</Link>
                <Link to="#">My Wishlist</Link>
                <Link to="#">Track My Order</Link>
                <Link to="#">Help</Link>
            </div>

            <div className="col install">
                <h4>Install App</h4>
                <p>From App Store or Google Play</p>
                <div className="row">
                    <img src={appStore} alt="" width="20%" height="50%" />
                    <img src={googleStore} alt="" width="20%" height="50%" />
                </div>
                <p>Secured Payment Gateways</p>
                <img src={pay} alt="" width="20%" height="40%" />
            </div>
            <div className="copyright">
                <p>© 2025, All Rights Reserved | This template is made with <i className="fa-solid fa-heart"></i> by <span>Janvee Sharma</span></p>
            </div>
        </footer>
    );
};

export default Footer;
