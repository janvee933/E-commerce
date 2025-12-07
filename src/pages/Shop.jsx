import React from 'react';
import Product from '../components/Product';
import Newsletter from '../components/Newsletter';
import { products } from '../data/products';

const Shop = () => {
    return (
        <>
            <section id="page-header">
                <h2>#stayhome</h2>
                <p>Save more with coupons & up to 70% off!</p>
            </section>

            <section id="product1" className="section-p1">
                <div className="pro-container">
                    {products.map(product => (
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

            <section id="pagination" className="section-p1">
                <a href="#">1</a>
                <a href="#">2</a>
                <a href="#"><i className="fa-solid fa-arrow-right"></i></a>
            </section>

            <Newsletter />
        </>
    );
};

export default Shop;
