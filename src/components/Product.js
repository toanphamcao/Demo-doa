import React, { useContext } from 'react';
import {Link} from "react-router-dom";
import { ProductContext } from '../context';

const Product = () => {
    const valueContext = useContext(ProductContext)
    const {menuItems, handleDetails, addToCart} = valueContext

    return (
        <div className='menu-box'>
         {menuItems.map((item, index) => {
            const {id, title, img, status, price} = item;

            return (
              <article key={id} className='menu-item'>
                <Link to="/details" onClick={() => handleDetails(id, index)}>
                  <img src={img} alt={title} className='menu-item-img' />
                </Link>
                <div className='item-info'>
                    <h4>{title}</h4>
                    <span className='price'>Vnd{price}</span>
                </div>
                <div>
                {status 
                  ? <button className="menu-btn" onClick={() => addToCart(id, index)}>Thêm vào giỏ hàng</button>
                  : <Link to="/details">
                      <button className="menu-btn">Xem thêm</button>
                    </Link>
                  }
                </div>
              </article>
            );
          })}
        </div>
      );
};

export default Product;