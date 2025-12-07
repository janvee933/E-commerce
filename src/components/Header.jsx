import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/myntraLogo.png';
import { useCart } from '../context/CartContext';

const Header = () => {
    const [isActive, setIsActive] = useState(false);
    const location = useLocation();
    const { cartItems } = useCart();

    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    const closeMenu = () => {
        setIsActive(false);
    };

    const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <section id="header">
            <Link to="/"><img src={logo} className="logo" alt="logo" width="50px" height="40px" /></Link>
            <div>
                <ul id="navbar" className={isActive ? 'active' : ''}>
                    <li><Link className={location.pathname === '/' ? 'active' : ''} to="/" onClick={closeMenu}>Home</Link></li>
                    <li><Link className={location.pathname === '/shop' ? 'active' : ''} to="/shop" onClick={closeMenu}>Shop</Link></li>
                    <li><Link className={location.pathname === '/blog' ? 'active' : ''} to="/blog" onClick={closeMenu}>Blog</Link></li>
                    <li><Link className={location.pathname === '/about' ? 'active' : ''} to="/about" onClick={closeMenu}>About</Link></li>
                    <li><Link className={location.pathname === '/contact' ? 'active' : ''} to="/contact" onClick={closeMenu}>Contact</Link></li>
                    <li id="lg-bag">
                        <Link to="/cart">
                            <i className="fa-solid fa-bag-shopping"></i>
                            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
                        </Link>
                    </li>
                    <a href="#" id="close" onClick={closeMenu}><i className="fa-solid fa-times"></i></a>
                </ul>
            </div>
            <div id="mobile">
                <Link to="/cart">
                    <i className="fa-solid fa-bag-shopping"></i>
                    {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
                </Link>
                <i id="bar" className="fa-solid fa-outdent" onClick={toggleMenu}></i>
            </div>
        </section>
    );
};

export default Header;
