import "../styles/preview.css";
import { FaWindowClose } from 'react-icons/fa';
import profile_img from '../asset/img/blank-profile-pic.png';
import { FaPhone } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaGlobeAmericas } from 'react-icons/fa';
import Experience from './experience';
import Education from "./education";
const Preview = (props) => {

    const { phone, email, link, address, about,
        skill, removeSkill,
        work, removeWork,
        education, removeEducation } = props;
    return (
        <div className="preview-wrapper">
            <img src={profile_img} alt="profile-img" className="profile-img" />
            <div className="preview-side-content">
                <h1>CONTACT</h1>
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
                <h1>ABOUT ME</h1>
                <p className="about-me">{about}</p>
                <h1>SKILLS</h1>
                <div className="skills">
                    <ul className="skill-list">
                        {skill.map((s, index) => {
                            return (
                                <div className="skill-container">
                                    <li key={index} className="skill">{s}</li>
                                    <button className="icon-btn" onClick={() => removeSkill(index)}><FaWindowClose /></button>
                                </div>
                            )
                        })}
                    </ul>
                </div>
            </div>

            <div className="preview-main-content-header">
                <h1 className="author-name">DAN NGUYEN</h1>
                <h2 className="job-title">SOFTWARE ENGINEER</h2>
            </div>
            <div className="preview-main-content-body">
                <h1>WORK EXPERIENCE</h1>
                <Experience work={work} removeWork={removeWork} />
                <h1>EDUCATION</h1>
                <Education education={education} removeEducation={removeEducation} />
            </div>
        </div>
    )
}

export default Preview;