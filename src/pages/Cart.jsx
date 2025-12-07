import React from 'react';
import Newsletter from '../components/Newsletter';
import banner from '../assets/banner.png';
import { useCart } from '../context/CartContext';

const Cart = () => {
    const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();

    return (
        <>
            <section id="page-header" style={{ backgroundImage: `url(${banner})` }}>
                <h2>#cart</h2>
                <p>Add your coupon code & SAVE upto 70%!</p>
            </section>

            <section id="cart" className="section-p1">
                {cartItems.length === 0 ? (
                    <h2>Your cart is empty</h2>
                ) : (
                    <table width="100%">
                        <thead>
                            <tr>
                                <td>Remove</td>
                                <td>Image</td>
                                <td>Product</td>
                                <td>Price</td>
                                <td>Quantity</td>
                                <td>Subtotal</td>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((item, index) => (
                                <tr key={`${item.id}-${item.size}`}>
                                    <td><a href="#" onClick={(e) => { e.preventDefault(); removeFromCart(item.id, item.size); }}><i className="fa-regular fa-circle-xmark"></i></a></td>
                                    <td><img src={item.image} alt="" /></td>
                                    <td>{item.name} <br /> <span>Size: {item.size}</span></td>
                                    <td>{item.price}</td>
                                    <td>
                                        <input
                                            type="number"
                                            value={item.quantity}
                                            min="1"
                                            onChange={(e) => updateQuantity(item.id, item.size, parseInt(e.target.value))}
                                        />
                                    </td>
                                    <td>₹{(parseFloat(item.price.replace('₹', '')) * item.quantity).toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </section>

            <section id="cart-add" className="section-p1">
                <div id="coupon">
                    <h3>Apply Coupon</h3>
                    <div>
                        <input type="text" placeholder="Enter Your Coupon" />
                        <button className="normal">Apply</button>
                    </div>
                </div>
                <div id="subtotal">
                    <h3>Cart Totals</h3>
                    <table>
                        <tbody>
                            <tr>
                                <td>Cart Subtotal</td>
                                <td>₹ {getCartTotal().toFixed(2)}</td>
                            </tr>
                            <tr>
                                <td>Shipping</td>
                                <td>Free</td>
                            </tr>
                            <tr>
                                <td><strong>Total</strong></td>
                                <td><strong>₹ {getCartTotal().toFixed(2)}</strong></td>
                            </tr>
                        </tbody>
                    </table>
                    <button className="normal">Proceed to checkout</button>
                </div>
            </section>

            <Newsletter />
        </>
    );
};

export default Cart;
