import React from 'react';
import './CSS/Gallery.css'


const Gallery = () => {
    return (
        <div className="gallery">
            <div className="gallery-image">
                <h1>Không gian cửa hàng </h1>
            </div>
            <div className="gallery-text">
                <p>ミ★★★Cuộc sống của con người ngày càng chịu tác động mạnh mẽ của cuộc cách mạng 4.0. Ẩm thực cũng theo dòng chảy của sự hội nhập mà phát triển phong phú với nhiều các món ăn trong và ngoài nước. Nhiều người còn "giải quyết" bữa ăn của mình chỉ bằng một cuộc điện thoại, một cái click chuột mà dần bỏ quên hương vị truyền thống của món ăn dân tộc. Nhưng bên cạnh đó, cũng còn rất nhiều người không thể "quên" được những món ăn dân dã chứa đựng cả tuổi thơ, cả cuộc đời.★★★ミ </p>
            </div>
            <div className="image-container">
                <div className="image-item">
                    <div className="overlay"></div>
                    <img src="https://cafefcdn.com/203337114487263232/2021/3/7/photo-4-16150954235591338931538.jpg"></img>
                </div>
                <div className="image-item">
                    <div className="overlay"></div>
                    <img src="http://odclick.com/wp-content/uploads/2018/11/banh-ngot1.jpg"></img>
                </div>
                <div className="image-item">
                    <div className="overlay"></div>
                    <img src="https://madamchic.vn/wp-content/uploads/2020/07/nhung-quan-banh-mi-viet-nam-duoc-bao-nuoc-ngoai-khen-ngoi-6.jpg"></img>
                </div>
                <div className="image-item">
                    <div className="overlay"></div>
                    <img src="https://madamchic.vn/wp-content/uploads/2020/07/nhung-quan-banh-mi-viet-nam-duoc-bao-nuoc-ngoai-khen-ngoi-7.jpg"></img>
                </div>
                <div className="image-item">
                    <div className="overlay"></div>
                    <img src="https://madamchic.vn/wp-content/uploads/2020/07/thuyet-minh-ve-banh-mi-viet-nam-2.jpg"></img>
                </div>
                <div className="image-item">
                    <div className="overlay"></div>
                    <img src="https://madamchic.vn/wp-content/uploads/2020/07/thuyet-minh-ve-banh-mi-viet-nam-3.jpg"></img>
                </div>
            </div>
        </div>
    );
};

export default Gallery;