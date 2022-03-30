import { FaPhone } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaGlobeAmericas } from 'react-icons/fa';

const Contact = ({ phone, email, link, address }) => {


    return (
        <div className="contact">
            <div className="info-container">
                <div className="icon info"><FaPhone /> </div>
                <p className="phone info">{phone} </p>
            </div>
            <div className="info-container">
                <div className="icon info"><FaEnvelope /> </div>
                <p className="email info">{email}</p>
            </div>
            <div className="info-container">
                <div className="icon info"><FaLinkedinIn /> </div>
                <p className="link info">{link}</p>
            </div>
            <div className="info-container">
                <div className="icon info"><FaGlobeAmericas /> </div>
                <p className="address info">{address}</p>
            </div>
        </div>
    )
}
export default Contact;
