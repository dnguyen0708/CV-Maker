import React, { useState } from 'react';
import Preview from "./preview";
import "../styles/form.css";
import { FaPlus } from 'react-icons/fa';
import Workform from './workForm';
import EducationForm from './educationForm';
import ContactForm from './contactForm';
const Form = () => {

    const [contact, setContact] = useState({
        name: 'JOHN DOE',
        title: 'SOFTWARE ENGINEER',
        email: 'johndoe@gmail.com',
        phone: '(202) 456-1111',
        link: 'https://www.linkedin.com',
        address: '1600 Pennsylvania Avenue NW, Washington, DC 20500',
        about: 'say a little about yourself.'
    });
    const [skill, setSkill] = useState([]);
    const [work, setWork] = useState([]);
    const [education, setEducation] = useState([]);


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
        if (newSkill.value && skill.length < 12)
            setSkill([...skill, newSkill.value]);
        toggleSkill();
    }
    const removeSkill = (index) => {
        const newSkills = skill.filter((s, i) => i !== index);
        setSkill(newSkills);
    }
    const removeWork = (index) => {
        const newWork = work.filter((w, i) => i !== index);
        setWork(newWork);
    }
    const removeEducation = (index) => {
        const newEducation = education.filter((e, i) => i !== index);
        setEducation(newEducation);
    }
    return (
        <>
            <div className="form-wrapper">
                <ContactForm contact={contact} setContact={setContact} />
                <div className="form-control special">
                    <button className='add-skill btn active' onClick={toggleSkill}><FaPlus /> SKILL</button>
                    <input type="text" name="skill" id="skill" autoComplete="off" maxLength={22} />
                    <button className='btn submit-skill' onClick={addSkillHandler}>ADD</button>
                </div>
                <Workform work={work} setWork={setWork} />
                <EducationForm education={education} setEducation={setEducation} />

            </div>
            <Preview
                contact={contact}
                skill={skill}
                removeSkill={removeSkill}
                work={work}
                removeWork={removeWork}
                education={education}
                removeEducation={removeEducation}>
            </Preview>
        </>
    )
}

export default Form;