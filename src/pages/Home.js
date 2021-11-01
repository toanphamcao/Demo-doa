import React from 'react';
import './CSS/Home.css'
import {Link} from "react-router-dom";
import MenuSlide from '../components/MenuSlide';
import ReviewSlide from '../components/ReviewSlide';
import Menu from './Menu';

const Home = () => {
    return (
        <div className="home">
            <div className="home-inner">
                <img src="https://cdn.vietnambiz.vn/171464876016439296/2021/3/23/bgrpic-copy-19-1616478414267633905458.jpeg" alt="img-inner"></img>
                <div className="home-inner-content">
                    <div className="inner-content-title">
                        <div>
                            <h2>Món ăn đường phố ngon nhất Việt Nam</h2>
                            <h1>Bánh Mì ăn là nhớ!</h1>
                        </div>
                        <div>
                            <p>Một món ăn tiện lợi nhưng vẫn đầy đủ dinh dưỡng   </p>
                            
                        </div>
                    <div className="home-inner--book-line">
                        <Link to="/contact">
                            <button className="book-btn">
                                <span>Đặt Hàng</span>
                            </button>
                        </Link>
                    </div>
                    </div>
                </div>
            </div>
            <div className="home-about">
                <article className="home-about-content">
                    <section className="home-about-content-item">
                        <div>
                        <h1>Món ăn vừa đơn giản vừa phức tạp. </h1>
                        <p>Đơn giản là ở đâu cũng có bánh mì, chỉ cần một xe đẩy nhỏ, một đôi gánh hoặc cả một cửa hàng rộng lớn, ở đâu cũng có bánh mì. Phức tạp ở cách chế biến, bạn không thể tưởng tượng để có một cái bánh mì ngon phải trải qua nhiều giai đoạn thế nào đâu.</p>
                        </div>
                        <div className="about-btn">
                            <Link to="/about"><h1>Cửa hàng</h1></Link>
                        </div>
                    </section>
                    <section className="home-about-content-item">
                       <div className="home-about-content-item-text">
                        <p>Error validating access token: The session has been invalidated because the user changed their password or Facebook has changed the session for security reasons</p>
                       </div>
                    </section>
                </article>
            </div>

            <MenuSlide></MenuSlide>
            <ReviewSlide></ReviewSlide>
            <div className="menu-wrap"><Menu></Menu></div>

            <div className="home-chef">
                <div className="chef-info">
                    <h2>Món ăn phù hợp với mọi người!</h2>
                    <h5>Ở đây, chúng tôi có tất cả!</h5>
                    <p>Chúng tôi coi trọng ý kiến của khách hàng và chất lượng sản phẩm.</p>
                    <span>Đầu bếp  Võ Di Đình</span>
                </div>
            </div>
            <div className="home-gallery">
                <div className="gallery-container">
                    <h2>Thơm ngon - Bổ dưỡng - Chất lượng</h2>
                    <h3>Sản phẩm của chúng tôi sẽ thay đổi tâm trạng của bạn!</h3>
                    
                
                </div>
            </div>
        
            
        </div>
    );
};

export default Home;