import React from 'react';
import './CSS/About.css'
import AboutTours from '../components/AboutTours';


const About = () => {

    return (
        <div className="about"> 
        <div className="about-wrap">
        <div className="about-image">
                <img src="https://www.monngon.tv/uploads/images/images/banh-mi-Stollen-1.jpg"></img>
            </div>
            <div className="about-title">
                <h2>Bột mì là nguyên liệu không thể thiếu để làm ra những ổ bánh mì thơm ngon.</h2>
            </div>            
            
            <div className="about-image">
                <img src="https://jpviet.net/wp-content/uploads/2019/10/xkl%C4%91-th%E1%BB%B1c-ph%E1%BA%A9m-l%C3%A0m-b%C3%A1nh-m%C3%AC.jpg"></img>
            </div>
            <div className="about-content">
                <h2 className="about-content-title">Giới thiệu</h2>
                    <h3>Bánh mì Ăn Là Nhớ của chúng tôi đã xuất hiện từ những năm 1980.Chúng tôi luôn nỗ lực hướng đến được việc sẽ luôn tạo ra những chiếc bánh mì ngon nhất với những thành phần nguyên liệu tươi ngon, cũng như năm bắt được hương vị truyền thống với tiêu chuẩn an toàn thực phẩm cao nhất
Đây thật sự là một món ăn NGON và BỔ DƯỠNG, quá hoàn hảo trong việc đi lại cũng như thư giãn cùng bạn bè. Chúng tôi đã cẩn thẩn tỉ mỉ tạo nên 15 loại bánh mì để phù hợp với từng khẩu vị tất cả mọi người. Hãy thưởng thức cùng chúng tôi ngay hôm nay nhé!</h3>
                    <p>Trải nghiệm tại Bánh mì Ăn Là Nhớ</p>
                    <h4>“Tiệm bánh mì xinh xắn nhất Đà Nẵng- Bánh mì Ăn Là Nhớ. Quán này độ nổi tiếng khỏi nói rồi hen, bước vào đứng nhẹ là có hình đẹp rồi khỏi cần làm gì luôn, cửa hàng bánh mì thôi mà có cần xinh vậy không! Menu đa dạng lắm, khoảng 15 loại bánh mì lận, mình gọi 3 loại là Bánh mì Ăn Là Nhớ, Bánh mì bò và Bánh mì nấm. Bánh mì Ăn Là Nhớ nhận ngập thịt luôn đó mọi người ơi, thịt nguội, giò lụa, thịt gà rồi có cả trứng nữa, rau, hành tây đầy đủ luôn. Bánh được làm nóng lên giòn rụm, nhân nhiều, sốt vừa phải chứ không chế tràn trề, ăn ngon lắm. Không gian thì có 1 bàn duy nhất trước cửa thôi nhưng chủ yếu ai cũng tới chụp hình chứ không ngồi ăn lâu, mọi người có tới chụp mà ngay lúc đông thì nhường nhau chụp choẹt thiệt văn minh nha. Mình có hỏi nhân viên nếu muốn ngồi lâu thì sao, các bạn nói ở Quận 1, Quận 2 và Quận 7 mấy tiệm khác đều có chỗ ngồi rộng rãi thoải mái luôn.”</h4>
                    <i>Trải nghiệm của bạn Quốc Anh - Khách hàng thân thiết tại Bánh mì Ăn Là Nhớ Cô Bắc.</i>
                <AboutTours/>
                
            </div>
        </div>
        <div className="chef-footer">
                <p className="chef-footer-text">Xem</p>
                <span className="chef-footer-text">Thực đơn</span>
                <p className="chef-footer-text">và</p>
                <span className="chef-footer-text">Đặt món</span>
            </div>
        </div>
    );
};

export default About;