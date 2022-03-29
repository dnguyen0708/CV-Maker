import '../styles/education.css'
import { FaWindowClose } from 'react-icons/fa';

const Education = ({ education, removeEducation }) => {
    return (
        <div className="education-container">
            {education.map((e, index) => {
                return (
                    <div className="" key={index}>
                        <button className="education-icon" onClick={() => removeEducation(index)}><FaWindowClose /></button>
                        <h2 className="degree">{e.degree}</h2>
                        <p className="school-name">{e.school}</p>
                        <p className="from-to">{e.fromTo}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Education;