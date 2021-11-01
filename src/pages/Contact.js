import React, { useState } from 'react';
import './CSS/Contact.css'

const Contact = () => {

    const [values, setValues] = useState({
        name: '',
        email: '', 
        message: ''  
    })
    const [valid, setValid] = useState({
        nameValid: false,
        emailValid: false,
        messageValid: false,
    })
   
    const handleChange = (e) => {
        const {name, value} = e.target
        setValid(false)
        setValues({
            ...values,
            [name]: value   
        })
    }


    const onHandleSubmit = (e) => {
        e.preventDefault()
        const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/   

        if(!values.message.trim()) {
            setValid({...valid, messageValid: true})
        } else {
            if(values.name && regexEmail.test(values.email)) {
                alert('Success')
                console.log(values)
            }
        }

        if(!regexEmail.test(values.email)) {
            setValid({...valid, emailValid: true})
        } 
        if(!values.name.trim()) {
            setValid({...valid, nameValid: true})
        } 

    }





    return (
        <div className="contact">
            <div className="contact-img">
                <h1>Đặt hàng</h1>
            </div>
         <div className="container">
                <div className="contact-item">
                    <h2>Liên hệ chúng tôi</h2>
                    <div className="contact-item-content">
                        <p>34 Xô Viết Nghệ Tĩnh</p>
                      
                    </div>
                    <div className="contact-item-content">
                        <h5>Số điện thoại: 0927778777</h5>
                        <h5>Email: toyeucauthatday1998@gmail.com</h5>
                        <h5>FB:https://www.facebook.com/banhmianlanho/</h5>
                    </div>
                    <div className="contact-item-content">
                        <h3>Bạn muốn tham gia vào đội?</h3>
                        <span>Nộp đơn ngay hôm nay</span>
                    </div>
                </div>
                <div className="contact-item">
                    <h2>Thời gian </h2>
                    <div className="contact-time">
                        <p>Giờ mở cửa:</p>
                        <p>5:00am-20:00pm</p>                       
                    </div>
                    <button className="contact-btn">
                        <span>ĐẶT HÀNG</span>
                    </button>
                </div>
                <div className="contact-item">
                    <h2>Phản hồi</h2>
                    <div className="contact-item-info">
                        <p>Cửa hàng Ăn Là Nhớ nằm ở trung tâm TP.Đà Nẵng. Địa chỉ của chúng tôi được người dân địa phương biết đến nhiều nhất.</p>
                        <br/>
                        <p>Vui lòng liên hệ với chúng tôi bằng cách sử dụng biểu mẫu trên trang liên quan đến bất kỳ câu hỏi nào bạn có thể có hoặc để đặt chỗ với chúng tôi</p>
                    </div>
                </div>
                <div className="contact-form">
                   <form onSubmit={onHandleSubmit}>
                        <div className="form-info">
                            <input className={valid.nameValid ? "mess-error" : ""}
                                type="text"
                                name="name" 
                                placeholder="Your name" 
                                value={values.name} 
                                onChange={handleChange}
                            />
                            {valid.nameValid ? <span>Please enter this field</span> : ''}
                            <input className={valid.emailValid ? "mess-error" : ""}
                                type="email"
                                name="email" 
                                placeholder="Email" 
                                value={values.email}     
                                onChange={handleChange}
                            />
                            {valid.emailValid ? <span>Check your email again</span> : ''}
                            <textarea className={valid.messageValid ? "input-message mess-error" : "input-message"} 
                                name="message" 
                                placeholder="Message" 
                                value={values.message} 
                                onChange={handleChange}
                            />
                            {valid.messageValid ? <span>Please enter this field</span> : ''}
                        </div>
                        <button type="submit" className="submit-btn">
                            <span>Submit</span>
                        </button>
                   </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;