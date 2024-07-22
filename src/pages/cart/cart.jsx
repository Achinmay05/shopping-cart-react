import React, { useContext } from 'react';
import { PRODUCTS } from '../../products';
import { ShopContext } from '../../context/shop-context';
import CartItem from './cart-item';
import "./cart.css";
import { useNavigate } from 'react-router-dom';

const Cart = () => {

    const { cartItems, getTotalAmount } = useContext(ShopContext);
    const totalAmount = getTotalAmount();
    const navigate = useNavigate();
    return (
        <div className="cart">
            <div>
                <h1>Your Cart Items</h1>
            </div>
            <div className="cardItems">
                {PRODUCTS.map((product) => {
                    if (cartItems[product.id] !== 0) {
                        return <CartItem data={product} />;
                    }
                })}
            </div>

            {totalAmount > 0 ? (
                <div className="checkout">
                    <p>Subtotal: ₹{totalAmount}</p>
                    <button onClick={() => navigate("/")}>Continue Shopping</button>
                    <button>Checkout</button>
                </div>
            ) : (
                <b><i>Your Cart is Empty</i></b>
            )}

        </div>
    )
}

export default Cart
