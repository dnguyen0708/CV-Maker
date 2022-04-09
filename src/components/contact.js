import { FaPhone } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaGlobeAmericas } from 'react-icons/fa';

const Contact = ({ contact }) => {


    return (
        <div className="contact">
            <div className="info-container">
                <div className="icon info"><FaPhone /> </div>
                <p className="phone info">{contact.phone} </p>
            </div>
            <div className="info-container">
                <div className="icon info"><FaEnvelope /> </div>
                <p className="email info">{contact.email}</p>
            </div>
            <div className="info-container">
                <div className="icon info"><FaLinkedinIn /> </div>
                <p className="link info">{contact.link}</p>
            </div>
            <div className="info-container">
                <div className="icon info"><FaGlobeAmericas /> </div>
                <p className="address info">{contact.address}</p>
            </div>
        </div>
    )
}
export default Contact;
