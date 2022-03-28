import React, { useState } from 'react';
import Preview from "./preview";
import "../styles/form.css";
import { FaPlus } from 'react-icons/fa';
const Form = () => {

    const [email, setEmail] = useState('johndoe@gmail.com');
    const [phone, setPhone] = useState('(202) 456-1111');
    const [link, setLink] = useState('https://www.linkedin.com');
    const [address, setAddress] = useState('1600 Pennsylvania Avenue NW, Washington, DC 20500');
    const [about, setAbout] = useState('say a little about yourself.');
    const [skill, setSkill] = useState([]);

    const emailHandler = () => {
        const email = document.querySelector('#email');
        setEmail(email.value);
    }
    const phoneHandler = () => {
        const phone = document.querySelector('#phone');
        setPhone(phone.value);
    }
    const linkHandler = () => {
        const link = document.querySelector('#link');
        setLink(link.value);
    }
    const addressHandler = () => {
        const address = document.querySelector('#address');
        setAddress(address.value);
    }
    const aboutHandler = () => {
        const about = document.querySelector('#about');
        setAbout(about.value);
    }
    const toggleSkill = () => {
        const addBtn = document.querySelector('.add-skill');
        const submitBtn = document.querySelector('.submit-skill');
        const skillInput = document.querySelector('#skill');
        addBtn.classList.toggle('active');
        submitBtn.classList.toggle('active');
        skillInput.classList.toggle('active');
        skillInput.value = '';
    }
    const addSkillHandler = () => {
        const newSkill = document.querySelector('#skill');
        if (newSkill.value)
            setSkill([...skill, newSkill.value]);
        toggleSkill();
    }
    const removeSkill = (index) => {
        const newSkills = skill.filter((s, i) => i !== index);
        setSkill(newSkills);
    }
    return (
        <>
            <div className="form-wrapper">
                <div className="form-group">
                    <div className="form-control">
                        <label htmlFor="email">EMAIL</label>
                        <input type="email" className="email" id="email"
                            placeholder={email}
                            onChange={emailHandler}
                            required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="phone">PHONE NUMBER</label>
                        <input type="tel" className="phone" id="phone"
                            pattern="^\d{3}-?\d{3}-?\d{4}|(\(\d{3}\)-?\d{3}-?\d{4})"
                            placeholder={phone}
                            onChange={phoneHandler}
                            minLength={10} required />
                    </div>
                </div>
                <div className="form-group">
                    <div className="form-control">
                        <label htmlFor="link">LINK</label>
                        <input type="link" className="link" id="link"
                            placeholder={link}
                            onChange={linkHandler}
                            required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="address">ADDRESS</label>
                        <input type="address" className="address" id="address"
                            placeholder={address}
                            onChange={addressHandler}
                            required />
                    </div>
                </div>
                <div className="form-control special">
                    <label htmlFor="about">ABOUT ME</label>
                    <textarea name="about" id="about" cols="50" rows="7" maxLength={200}
                        onChange={aboutHandler}
                    ></textarea>
                </div>
                <div className="form-control special">
                    <button className='add-skill btn active' onClick={toggleSkill}><FaPlus /> SKILL</button>
                    <input type="text" name="skill" id="skill" autoComplete="off" maxLength={22} />
                    <button className='btn submit-skill' onClick={addSkillHandler}>ADD</button>
                </div>

            </div>
            <Preview
                email={email}
                phone={phone}
                link={link}
                address={address}
                about={about}
                skill={skill}
                removeSkill={removeSkill}>
            </Preview>
        </>
    )
}

export default Form;