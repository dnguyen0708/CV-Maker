/* eslint-disable jsx-a11y/alt-text */
import "../styles/preview.css";
import Experience from './experience';
import Education from "./education";
import ProfileImage from "./profileImage";
import Contact from "./contact";
import Skill from "./skill";
const Preview = (props) => {

    const { phone, email, link, address, about, name, title,
        skill, removeSkill,
        work, removeWork,
        education, removeEducation } = props;


    return (
        <div className="preview-wrapper">
            <ProfileImage />
            <div className="preview-side-content">
                <h1>CONTACT</h1>
                <Contact phone={phone} email={email} link={link} address={address} />
                <h1>ABOUT ME</h1>
                <p className="about-me">{about}</p>
                <h1>SKILLS</h1>
                <Skill skill={skill} removeSkill={removeSkill} />
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