import React, { useContext } from 'react';
import { ProductContext } from '../context';
import './CSS/ProductDetails.css'
import {Link} from "react-router-dom";

const ProductDetails = () => {
    const valueContext = useContext(ProductContext)
    const {addToCart, indexItem} = valueContext
    const {id, title, img, desc, status, price} = valueContext.detailsProduct
 

    return (
        <>
            <div className="product-details">
                <div className="product-details-image">
                    <img src={img} alt={title}></img>
                </div>
                <div className="product-details-info">
                    <div className="details-info-item">
                        <h3>{title}</h3>
                        <p>Vnd{price}</p>
                    </div>
                    <p className="details-info-desc">{desc}</p>
                    <div className="details-btn">
                        <Link to="/">
                            <button className="details-btn-back">Trở về trang chủ</button>
                        </Link>
                        {status ? 
                        <button className="details-add-cart" onClick={() => addToCart(id, indexItem)}>Thêm vào giỏ hàng</button> : ''}
                    </div> 
                </div>
            </div>   
        </>
    );
};

export default ProductDetails;