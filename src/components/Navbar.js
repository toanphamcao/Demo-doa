import React, { useContext, useState } from 'react';
import './CSS/Navbar.css'
import {BiMap} from 'react-icons/bi'
import {AiOutlinePhone} from 'react-icons/ai'
import {BiTimeFive} from 'react-icons/bi'
import {FaFacebookSquare} from 'react-icons/fa'
import {AiFillTwitterSquare} from 'react-icons/ai';
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {Link} from "react-router-dom";
import {FaShoppingCart} from 'react-icons/fa'
import {FaBars} from 'react-icons/fa'
import { ProductContext } from '../context';



const Navbar = () => {
    const [isMoBile, setIsMobile] = useState(false)
    const valueContext = useContext(ProductContext)
    const {cartItem} = valueContext


    const openMobile = () => {
        setIsMobile(true)
    }

    const closeMobile = () => {
        setIsMobile(false)
    }
 


    return (
        <header className="navbar">
            <div className="navbar_header">
                <div className="navbbar_header-wrap">
                    <div className="navbar_header-info">
                        <BiMap/>
                        <span>34 Xô Viết Nghệ Tĩnh</span>
                    </div>
                    <div className="navbar_header-info">
                        <AiOutlinePhone/>
                        <span>029777787777</span>
                    </div>
                    <div className="navbar_header-info">
                        <BiTimeFive/>
                        <span>24/7</span>
                    </div>
                    <div className="navbar_header-info">
                        <a><FaFacebookSquare/></a>
                        <a><AiFillTwitterSquare/></a>
                        <a><AiFillLinkedin/></a>
                        <a><AiFillInstagram/></a>
                    </div>
                </div>
            </div>
            <nav className="navbar_intro">
                <div className="navbar_intro-list">
                    <ul className={isMoBile ? "nav-links-mobile" : 'nav-links'}>
                        {isMoBile ? <button className="close-navbar" onClick={closeMobile}>x</button> : ''}
                        <Link to="/" className={isMoBile ? "navbar_intro-list--link link-space" : "navbar_intro-list--link"}>
                            <li onClick={closeMobile}>Trang chủ</li>
                        </Link>
                        <Link to="/about" className="navbar_intro-list--link">
                            <li onClick={closeMobile}>Cửa hàng</li>
                        </Link>
                        <Link to="/menu" className="navbar_intro-list--link">
                            <li onClick={closeMobile}>Thực đơn</li>
                        </Link>
                        <Link to="/gallery" className="navbar_intro-list--link">
                            <li onClick={closeMobile}>Không gian</li>
                        </Link>
                        <Link to="/contact" className="navbar_intro-list--link">
                            <li onClick={closeMobile}>Đặt hàng</li>
                        </Link>
                        <Link to="/cart" className="navbar_intro-list--link">
                            <li className="cart-products" onClick={closeMobile}>
                                <FaShoppingCart/>
                                <span className="cart-number">{cartItem.length}</span>
                            </li>
                        </Link>
                    </ul>
                    <button className="mobile-menu-icon" onClick={openMobile}>
                        {isMoBile ? '' : <FaBars/>}
                    </button>
                </div>
                <div className="navbar_intro-logo">
                    <Link to="/">
                        <img src="data:image/png;base64,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" alt="navbar-logo"></img>
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;