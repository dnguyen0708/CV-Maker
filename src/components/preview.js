/* eslint-disable jsx-a11y/alt-text */
import "../styles/preview.css";
import { FaWindowClose } from 'react-icons/fa';
import profile_img from '../asset/img/blank-profile-pic.png';
import { FaPhone } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaGlobeAmericas } from 'react-icons/fa';
import Experience from './experience';
import Education from "./education";
import React, { useState } from 'react';
const Preview = (props) => {

    const { phone, email, link, address, about, name, title,
        skill, removeSkill,
        work, removeWork,
        education, removeEducation } = props;

    const [image, setImage] = useState(profile_img);
    const uploadImage = () => {
        const upload = document.querySelector('#img');
        upload.click();
    }
    const updateImage = (e) => {
        setImage(URL.createObjectURL(e.target.files[0]));
    }
    return (
        <div className="preview-wrapper">
            <div className="profile-img">
                <input type="image" src={image} className="cover-img" onClick={uploadImage}></input>
                <input type="file" id="img" name="img" accept="image/*" onChange={updateImage}></input>
            </div>
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
                <h1 className="author-name">{name}</h1>
                <h2 className="job-title">{title}</h2>
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