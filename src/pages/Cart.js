import React, { useContext } from 'react';
import { ProductContext } from '../context';
import './CSS/Cart.css'
import {MdDelete} from 'react-icons/md'

const Cart = () => {
    const valueContext = useContext(ProductContext)
    const productItems = valueContext.cartItem
    const {itemPrice, taxPrice, totalPrice, removeItem, addToCart, countItemRevemo, clearCart} = valueContext


    return (
        <>
        <div className="cart-wrap">
        <h1 className="cart-wrap-title">Giỏ hàng của bạn</h1>
            {productItems.map((item, index) => {
                const {id, title, img, price, qty} = item

                return (
                    <div className="cart-product" key={index}>
                        <div className="cart-product-img">
                            <h3>Sản phẩm</h3>
                            <img src={img} alt={title}/>
                        </div>
                        <div className="cart-product-title">
                            <h3>Tên món ăn</h3>
                            <p>{title}</p>
                        </div>
                        <div className="cart-product-price"> 
                            <h3>Giá</h3>
                            <p>{price}Vnd</p>
                        </div>
                        <div className="cart-product-quanlity">
                            <h3>Số lượng</h3>
                            <button className="remove" onClick={() => countItemRevemo(id, index)}>-</button>
                            <button className="number">{qty}</button>
                            <button className="number" onClick={() => addToCart(id, index)}>+</button>
                        </div>
                        <div>
                            <h3>Xóa</h3>
                            <MdDelete className="remove-icon" onClick={() => removeItem(id)}></MdDelete>
                        </div>
                        <div className="cart-product-total">
                                <h3>Tổng tiền</h3>
                            <strong>
                            <span>{qty} x </span>
                                <span>{price}Vnd</span>
                            </strong>
                        </div>
                    </div>
                )
            })}

            <div className="cart-footer">
                <div className="cart-footer-total">
                    
                    <h2>Thành tiền: <span>{itemPrice.toFixed(2)}Vnd</span></h2>
                    <h2>Tổng tiền: <span>{totalPrice.toFixed(2)}Vnd</span></h2>
                    <h2>Thuế: <span>{taxPrice.toFixed(2)}Vnd</span></h2>
                    <button onClick={clearCart}>Xóa giỏ hàng</button>
                </div>
            </div>
            </div>
        </>
    );
};

export default Cart;