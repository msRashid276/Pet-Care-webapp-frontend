import React from "react";
import { Link } from "react-router-dom";
import { GoChevronRight } from "react-icons/go";
import "./cart.css";
import { useSelector } from "react-redux";
import { FaMinus, FaPlus } from "react-icons/fa";

const Cart = () => {

  const { cartItems } = useSelector((state) => state.cart);
  console.log(cartItems,"cart");
 
  
  return (
    <div className="w-full bg-white overflow-x-hidden">
      {/* Breadcrumb Section Begin */}
      <div className="w-full h-40" style={{ background: "#f3f2ee" }}>
        <div className="max-w-screen-lg mx-auto h-full flex flex-col items-start justify-center space-y-3">
          <h1 className="text-3xl font-semibold">Pet Cart</h1>
          <div className="flex space-x-2 text-md items-center ">
            <Link
              to="/user/home"
              className="font-thin text-black hover:no-underline "
            >
              Home
            </Link>
            <span>
              <GoChevronRight />
            </span>
            {/* <Link to="shop" className='font-thin text-black hover:no-underline '>Shop</Link><span><GoChevronRight /></span> */}
            <Link
              to=""
              className="font-thin text-neutral-400 hover:no-underline "
            >
              Pet Cart
            </Link>
          </div>
        </div>
      </div>
      {/* Breadcrumb Section End */}

      {/* <!-- Shopping Cart Section Begin --> */}
      <section className="shopping-cart ">
        <div className="w-full py-20">
          <div className="max-w-screen-xl space-x-3 mx-auto flex lg:flex-row flex-col justify-evenly px-2">
            <div className="flex flex-col">
                <div className="shopping__cart__table">
                <table>
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                       <tr key={item.id} >
                          <td className="flex w-[175px]">
                            <div className="flex flex-col justify-center items-center font-bold">
                              <img src={item.images[0]} alt={item.name} className="h-30 w-30 rounded-lg" />
                              <p>{item.breed}</p>
                            </div>
                          </td>
                          <td className="quantity__item">
                            <div className="quantity">
                              <div className="pro-qty-2">
                                <input type="text" value={`$${item.price}`} readOnly />
                              </div>
                            </div>
                          </td>
                          <td >
                            <div className="border border-neutral-200 p-2">
                              <div className="flex space-x-5">
                                <button><FaMinus className=""/></button>
                                <div className="text-xl font-semibold">{item.cartQuantity}</div>
                                <button ><FaPlus /> </button>
                              </div>
                            </div>
                          </td>
                          <td className="cart__price">
                            ${item.price * item.cartQuantity}
                          </td>
                          <td className="cart__close">
                            <i className="fa fa-close"></i>
                          </td>
                     </tr>
                    ))}
                    
                  </tbody>
                </table>
              </div>
              <div className="flex justify-between">
                <div className="">
                  <div className="continue__btn">
                    <a href="#">Continue Shopping</a>
                  </div>
                </div>
                <div className="">
                  <div className="continue__btn update__btn">
                    <a href="#">
                      <i className="fa fa-spinner"></i> Clear0 cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:pt-0 pt-10">
              <div className="cart__discount">
                <h6>Discount codes</h6>
                <form action="#">
                  <input type="text" placeholder="Coupon code" />
                  <button type="submit">Apply</button>
                </form>
              </div>
              <div className="cart__total">
                <h6>Cart total</h6>
                <ul>
                  <li>
                    Subtotal <span>${cartItems.reduce((total,item) => total + item.price * item.cartQuantity,0)}</span>
                  </li>
                  <li>
                    Total <span>${cartItems.reduce((total,item) => total + item.price * item.cartQuantity,0)}</span>
                  </li>
                </ul>
                <a href="#" className="primary-btn">
                  Proceed to checkout
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Shopping Cart Section End --> */}
    </div>
  );
};

export default Cart;
