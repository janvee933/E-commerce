import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Product = ({ id, image, brand, name, price }) => {
    const { addToCart } = useCart();

    const handleAddToCart = (e) => {
        e.preventDefault(); // Prevent navigating to details page
        addToCart({ id, image, brand, name, price }, 1, 'Small');
    };

    return (
        <div className="pro">
            <Link to={`/product/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <img src={image} alt="" />
                <div className="des">
                    <span>{brand}</span>
                    <h5>{name}</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4>{price}</h4>
                </div>
            </Link>
            <a href="#" onClick={handleAddToCart}><i className="fa-solid fa-cart-shopping cart"></i></a>
        </div>
    );
};

export default Product;
