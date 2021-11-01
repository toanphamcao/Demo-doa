import React from 'react';
import './CSS/MenuSlide.css'

const MenuSlide = () => {
    return (
        <div className="slide-container">
            <section className="slide-item">
                <div className="slide-item-overlay">
                    <div className="slide-item-content">
                        <h1>Thập Cẩm</h1>
                        
                    </div>
                </div>
                <img src="https://banhmihonghoa.com/thumb/585x370/1/upload/news/banh-mi-ta-co-gi-khien-tay-me-den-vay1530081808.jpg" alt="slide"></img>
            </section>
            <section className="slide-item">
                <div className="slide-item-overlay">
                    <div className="slide-item-content">
                        <h1> Ốp la</h1>
                    </div>
                </div>
                <img src="https://hstatic.net/759/1000071759/1/2016/2-22/banh-mi-op-la_master.jpg" alt="slide"></img>
            </section>
            <section className="slide-item">
                <div className="slide-item-overlay">
                    <div className="slide-item-content">
                        <h1>Gà xé</h1>
                        
                    </div>
                </div>
                <img src="https://banhmihonghoa.com/upload/product/banh-mi-cha-bong1530095402_275x205.png" alt="slide"></img>
            </section>
            <section className="slide-item">
                <div className="slide-item-overlay">
                    <div className="slide-item-content">
                        <h1>Heo quay</h1>
                         
                    </div>
                </div>
                <img src="https://banhmihonghoa.com/upload/product/banh-mi-heo-quay1530092878_275x205.png" alt="slide"></img>
            </section>
        </div>
    );
};

export default MenuSlide;