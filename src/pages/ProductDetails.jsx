import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Product from '../components/Product';
import Newsletter from '../components/Newsletter';
import ReviewSection from '../components/ReviewSection';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetails = () => {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));
    const [mainImg, setMainImg] = useState(product ? product.image : '');
    const [quantity, setQuantity] = useState(1);
    const [size, setSize] = useState('Small');
    const { addToCart } = useCart();

    useEffect(() => {
        if (product) {
            setMainImg(product.image);
        }
    }, [product]);

    if (!product) {
        return <h2>Product not found</h2>;
    }

    const handleAddToCart = () => {
        addToCart(product, parseInt(quantity), size);
    };

    // Related products
    const relatedProducts = products.slice(0, 4);

    return (
        <>
            <section id="prodetails" className="section-p1">
                <div className="single-pro-image">
                    <img src={mainImg} width="100%" id="MainImg" alt={product.name} />
                    <div className="small-img-group">
                        {product.images ? (
                            product.images.map((img, index) => (
                                <div className="small-img-col" key={index} onClick={() => setMainImg(img)}>
                                    <img src={img} width="100%" className="small-img" alt={`Variant ${index}`} />
                                </div>
                            ))
                        ) : (
                            // Fallback for products without variants - show same image 4 times
                            [...Array(4)].map((_, index) => (
                                <div className="small-img-col" key={index} onClick={() => setMainImg(product.image)}>
                                    <img src={product.image} width="100%" className="small-img" alt="" />
                                </div>
                            ))
                        )}
                    </div>
                </div>
                <div className="single-pro-details">
                    <h6>Home / T-shirt</h6>
                    <h4>{product.name}</h4>
                    <h2>{product.price}</h2>
                    <select value={size} onChange={(e) => setSize(e.target.value)}>
                        <option>Select Size</option>
                        <option value="XL">XL</option>
                        <option value="XXL">XXL</option>
                        <option value="Small">Small</option>
                        <option value="Medium">Medium</option>
                        <option value="Large">Large</option>
                    </select>
                    <input
                        type="number"
                        value={quantity}
                        min="1"
                        onChange={(e) => setQuantity(e.target.value)}
                    />
                    <button className="normal" onClick={handleAddToCart}>Add To Cart</button>
                    <h4>Product Details</h4>
                    <span>The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 0z.
                        per sq yd fabric contructed from 100% cotton, this classic fit preshrunk
                        jersey knit provides unmatched comfort with each wear.  Featuring a tapped neck
                        and shoulder , and a seamless double-needed collar, and available in a range
                        color, it offers it all in the ultimate head - turning package. </span>
                </div>
            </section>

            <ReviewSection productId={product.id} />

            <section id="product1" className="section-p1">
                <h2>Featured Products</h2>
                <p>Summer Collection New Morden Design</p>
                <div className="pro-container">
                    {relatedProducts.map(p => (
                        <Product
                            key={p.id}
                            id={p.id}
                            image={p.image}
                            brand={p.brand}
                            name={p.name}
                            price={p.price}
                        />
                    ))}
                </div>
            </section>

            <Newsletter />
        </>
    );
};

export default ProductDetails;
