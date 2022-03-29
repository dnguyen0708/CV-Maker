import '../styles/experience.css';
import { FaWindowClose } from 'react-icons/fa';
const Experience = ({ work, removeWork }) => {


    return (
        <div className="experience-container">
            {work.map((w, index) => {
                return (
                    <div className="" key={index}>
                        <button className="work-icon" onClick={() => removeWork(index)}><FaWindowClose /></button>
                        <h2 className="title">{w.job}</h2>
                        <p className="company-name">{w.company}</p>
                        <p className="address">{w.address}</p>
                        <p className="from-to">{w.fromTo}</p>
                        <p className="job-description">{w.desc}</p>
                    </div>
                )
            })}

        </div>
    )
}

export default Experience;