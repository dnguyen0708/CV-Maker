import { FaPlus } from 'react-icons/fa';
import '../styles/educationform.css';
const EducationForm = ({ education, setEducation }) => {

    const toggleEducation = () => {
        const addBtn = document.querySelector('.add-education');
        const workForm = document.querySelector('.education-group');
        addBtn.classList.toggle('active');
        workForm.classList.toggle('active');
    }
    const addEducationHandler = () => {
        const degree = document.querySelector("#education-degree");
        const school = document.querySelector("#education-school-name");
        const fromTo = document.querySelector("#education-from-to");

        const newEducation = {
            degree: degree.value,
            school: school.value,
            fromTo: fromTo.value
        }

        setEducation([...education, newEducation]);
        closeEducationHandler();
    }
    const closeEducationHandler = () => {
        toggleEducation();
        resetEducationForm();
    }
    const resetEducationForm = () => {
        const degree = document.querySelector("#education-degree");
        const school = document.querySelector("#education-school-name");
        const fromTo = document.querySelector("#education-from-to");

        degree.value = school.value = fromTo.value = '';
    }
    return (
        <>
            <div className="form-control special">
                <button className='add-education btn active' onClick={toggleEducation}><FaPlus /> EDUCATION</button>
            </div>
            <div className="education-group">
                <div className="form-control">
                    <label htmlFor="education-degree">DEGREE</label>
                    <input type="text" className="education-degree" id="education-degree"
                        required />
                </div>
                <div className="form-control">
                    <label htmlFor="education-school-name">SCHOOL NAME</label>
                    <input type="text" className="education-school-name" id="education-school-name"
                        required />
                </div>
                <div className="form-control">
                    <label htmlFor="education-from-to">FROM - TO</label>
                    <input type="text" className="education-from-to" id="education-from-to"
                        required />
                </div>
                <div className="education-btn">
                    <button className='btn submit-education add' onClick={addEducationHandler}>ADD</button>
                    <button className='btn submit-education close' onClick={closeEducationHandler}>CLOSE</button>
                </div>
            </div>
        </>
    )
}

export default EducationForm;