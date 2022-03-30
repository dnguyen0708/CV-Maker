import { FaWindowClose } from 'react-icons/fa';
const Skill = ({ skill, removeSkill }) => {


    return (
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
    )
}

export default Skill;