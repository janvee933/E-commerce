import React from 'react';
import Product from '../components/Product';
import Newsletter from '../components/Newsletter';
import { products } from '../data/products';

// Import Feature Images
import freeShipping from '../assets/freeShipping.png';
import onlineOrder from '../assets/onlineshopping.png';
import saveMoney from '../assets/savemoney.png';
import promotion from '../assets/promotion.png';
import happySell from '../assets/happysell.png';
import service from '../assets/service.png';

const Home = () => {
    const featuredProducts = products.filter(p => p.type === 'featured');
    const newArrivals = products.filter(p => p.type === 'new');

    return (
        <>
            <section id="hero">
                <h4>Trade-in-offer</h4>
                <h2>Super value deals</h2>
                <h1>on all products </h1>
                <p>Save more with coupons & up to 70% off! </p>
                <button>Shop now</button>
            </section>

            <section id="feature" className="section-p1">
                <div className="fe-box">
                    <img src={freeShipping} alt="" height="50px" width="50px" />
                    <h6>Free Shipping</h6>
                </div>
                <div className="fe-box">
                    <img src={onlineOrder} alt="" height="50px" width="50px" />
                    <h6>Online Order</h6>
                </div>
                <div className="fe-box">
                    <img src={saveMoney} alt="" height="50px" width="50px" />
                    <h6>Save Money</h6>
                </div>
                <div className="fe-box">
                    <img src={promotion} alt="" height="50px" width="50px" />
                    <h6>Promotions</h6>
                </div>
                <div className="fe-box">
                    <img src={happySell} alt="" height="50px" width="50px" />
                    <h6>Happy Sell</h6>
                </div>
                <div className="fe-box">
                    <img src={service} alt="" height="50px" width="50px" />
                    <h6>F24/7 Support</h6>
                </div>
            </section>

            <section id="product1" className="section-p1">
                <h2>Featured Products</h2>
                <p>Summer Collection New Morden Design</p>
                <div className="pro-container">
                    {featuredProducts.map(product => (
                        <Product
                            key={product.id}
                            id={product.id}
                            image={product.image}
                            brand={product.brand}
                            name={product.name}
                            price={product.price}
                        />
                    ))}
                </div>
            </section>

            <section id="banner" className="section-m1">
                <h4>Repair Services</h4>
                <h2>Up to <span>70% off</span> All t-shirts & Accessories</h2>
                <button className="normal"> More</button>
            </section>

            <section id="product1" className="section-p1">
                <h2>New Arrival</h2>
                <p>Summer Collection New Morden Design</p>
                <div className="pro-container">
                    {newArrivals.map(product => (
                        <Product
                            key={product.id}
                            id={product.id}
                            image={product.image}
                            brand={product.brand}
                            name={product.name}
                            price={product.price}
                        />
                    ))}
                </div>
            </section>

            <section id="sm-banner" className="section-p1">
                <div className="banner-box">
                    <h4>crazy deals</h4>
                    <h2>buy 1 get 1 free</h2>
                    <span>The best classic dress is on sale at Myntra</span>
                    <button className="white">Learn More</button>
                </div>
                <div className="banner-box banner-box2">
                    <h4>spring/summer</h4>
                    <h2>upcoming season</h2>
                    <span>The best classic dress is on sale at Myntra</span>
                    <button className="white">Collection</button>
                </div>
            </section>

            <section id="banner3">
                <div className="banner-box">
                    <h2>SEASONAL SALE</h2>
                    <h3>Winter Collection -58% OFF</h3>
                </div>
                <div className="banner-box banner-box2">
                    <h2>New FOOTWEAR Collection</h2>
                    <h3>Spring / Summer</h3>
                </div>
                <div className="banner-box banner-box3">
                    <h2>T-Shirts</h2>
                    <h3>New Trendy Prints</h3>
                </div>
            </section>

            <Newsletter />
        </>
    );
};

export default Home;
