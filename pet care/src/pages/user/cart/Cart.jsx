import React from "react";
import { Link } from "react-router-dom";
import { GoChevronRight } from "react-icons/go";
import "./cart.css";

const Cart = () => {
  return (
    <div className="w-full bg-white overflow-x-hidden">
      {/* Breadcrumb Section Begin */}
      <div className="w-full h-40" style={{ background: "#f3f2ee" }}>
        <div className="max-w-screen-xl mx-auto h-full flex flex-col items-start justify-center space-y-3">
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
                      <th>Quantity</th>
                      <th>Total</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="product__cart__item">
                        <div className="product__cart__item__pic">
                          <img src="img/shopping-cart/cart-1.jpg" alt="" />
                        </div>
                        <div className="product__cart__item__text">
                          <h6>T-shirt Contrast Pocket</h6>
                          <h5>$98.49</h5>
                        </div>
                      </td>
                      <td className="quantity__item">
                        <div className="quantity">
                          <div className="pro-qty-2">
                            <input type="text" value="1" />
                          </div>
                        </div>
                      </td>
                      <td className="cart__price">$ 30.00</td>
                      <td className="cart__close">
                        <i className="fa fa-close"></i>
                      </td>
                    </tr>
                    <tr>
                      <td className="product__cart__item">
                        <div className="product__cart__item__pic">
                          <img src="img/shopping-cart/cart-2.jpg" alt="" />
                        </div>
                        <div className="product__cart__item__text">
                          <h6>Diagonal Textured Cap</h6>
                          <h5>$98.49</h5>
                        </div>
                      </td>
                      <td className="quantity__item">
                        <div className="quantity">
                          <div className="pro-qty-2">
                            <input type="text" value="1" />
                          </div>
                        </div>
                      </td>
                      <td className="cart__price">$ 32.50</td>
                      <td className="cart__close">
                        <i className="fa fa-close"></i>
                      </td>
                    </tr>
                    <tr>
                      <td className="product__cart__item">
                        <div className="product__cart__item__pic">
                          <img src="img/shopping-cart/cart-3.jpg" alt="" />
                        </div>
                        <div className="product__cart__item__text">
                          <h6>Basic Flowing Scarf</h6>
                          <h5>$98.49</h5>
                        </div>
                      </td>
                      <td className="quantity__item">
                        <div className="quantity">
                          <div className="pro-qty-2">
                            <input type="text" value="1" />
                          </div>
                        </div>
                      </td>
                      <td className="cart__price">$ 47.00</td>
                      <td className="cart__close">
                        <i className="fa fa-close"></i>
                      </td>
                    </tr>
                    <tr>
                      <td className="product__cart__item">
                        <div className="product__cart__item__pic">
                          <img src="img/shopping-cart/cart-4.jpg" alt="" />
                        </div>
                        <div className="product__cart__item__text">
                          <h6>Basic Flowing Scarf</h6>
                          <h5>$98.49</h5>
                        </div>
                      </td>
                      <td className="quantity__item">
                        <div className="quantity">
                          <div className="pro-qty-2">
                            <input type="text" value="1" />
                          </div>
                        </div>
                      </td>
                      <td className="cart__price">$ 30.00</td>
                      <td className="cart__close">
                        <i className="fa fa-close"></i>
                      </td>
                    </tr>
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
                      <i className="fa fa-spinner"></i> Update cart
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
                    Subtotal <span>$ 169.50</span>
                  </li>
                  <li>
                    Total <span>$ 169.50</span>
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
