import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CiCircleRemove } from 'react-icons/ci';
import { deleteitem, incrementQuantity, decrementQuantity, EmptyCart } from '../features/Cart2';
import '../index1.css';
import toast from 'react-hot-toast';
import { MdDelete } from "react-icons/md";
const Cart = () => {
  const cartData = useSelector((state) => state.Cart);
  console.log('Cart', cartData);
  const user = localStorage.getItem("name");
  const userCartItems = cartData.filter(item => item.userName === user);

  const dispatch = useDispatch();

  // Calculate the total amount
  let totalAmount = 0;
  cartData.forEach(item => {
    totalAmount += item.price * item.quantity;
  });

  const handleCheckout = () => {
    dispatch(EmptyCart([]));
    toast.success(`Your order has been placed with total amount of Rs.${totalAmount+40}`);
  };

  const handleRemoveItem = (id) => {
    toast.success("Item removed from cart");
    dispatch(deleteitem(id));
  };

  return (
    <div className="master-container">
      <div className="card cart">
        <label className="title">Your cart</label>
        <div className="products">
          {userCartItems.map((item) => (
            <div className="product" key={item.id}>
              <img src={item.images} alt={item.title} height="60" width="60" />
              <div>
                <span>{item.title}</span>
                <p>{item.description}</p>
                <p>{item.options}</p>
              </div>
              <div className="quantity">
                <button
                  onClick={() => dispatch(decrementQuantity(item.id))}
                >
                  <svg fill="none" viewBox="0 0 24 24" height="14" width="14" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" stroke="#47484b" d="M20 12L4 12"></path>
                  </svg>
                </button>
                <label>{item.quantity}</label>
                <button
                  onClick={() => dispatch(incrementQuantity(item.id))}
                >
                  <svg fill="none" viewBox="0 0 24 24" height="14" width="14" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" stroke="#47484b" d="M12 4V20M20 12H4"></path>
                  </svg>
                </button>
              </div>
              <label className="price small">Rs.{item.price * item.quantity}</label>
              <MdDelete onClick={() => handleRemoveItem(item.id)}
                style={{ fontSize: '30px', cursor: 'pointer' }} />

            </div>
          ))}
        </div>
      </div>

      <div className="card checkout">
        <label className="title">Checkout</label>
        <div className="details">
          <span>Your cart subtotal:</span>
          <span>Rs.{totalAmount.toFixed(2)}</span>
          <span>Discount through applied coupons:</span>
          <span>Rs.0.00</span> {/* Placeholder for coupon discount */}
          <span>Shipping fees:</span>
          <span>Rs.40.00</span>
        </div>
        <div className="checkout--footer">
          <label className="price"><sup>Rs.</sup>{(totalAmount + 40).toFixed(2)}</label>
          <button className="checkout-btn" onClick={handleCheckout}>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
