import { FaPlus } from 'react-icons/fa';
import '../styles/workform.css';
const Workform = ({ work, setWork }) => {

    const addWorkHandler = () => {
        const job = document.querySelector("#job-title");
        const address = document.querySelector("#job-address");
        const company = document.querySelector("#job-company");
        const fromTo = document.querySelector("#job-from-to");
        const desc = document.querySelector("#desc");
        const newWork = {
            job: job.value,
            company: company.value,
            address: address.value,
            fromTo: fromTo.value,
            desc: desc.value
        }

        setWork([...work, newWork]);
        closeWorkHandler();
    }
    const workFormReset = () => {
        const job = document.querySelector("#job-title");
        const address = document.querySelector("#job-address");
        const company = document.querySelector("#job-company");
        const fromTo = document.querySelector("#job-from-to");
        const desc = document.querySelector("#desc");

        job.value = address.value = company.value = fromTo.value = desc.value = '';
    }
    const closeWorkHandler = () => {
        // const closeBtn = document.querySelector('.submit-work.close');
        toggleWork();
        workFormReset();
    }
    const toggleWork = () => {
        const addBtn = document.querySelector('.add-work');
        const workForm = document.querySelector('.work-group');
        addBtn.classList.toggle('active');
        workForm.classList.toggle('active');
    }
    return (
        <>
            <div className="form-control special">
                <button className='add-work btn active' onClick={toggleWork}><FaPlus /> WORK</button>
            </div>
            <div className="work-group">
                <div className="form-group">
                    <div className="form-control">
                        <label htmlFor="job-title">JOB TITLE</label>
                        <input type="text" className="job-title" id="job-title"
                            required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="job-address">ADDRESS</label>
                        <input type="text" className="job-address" id="job-address"
                            required />
                    </div>

                </div>
                <div className="form-group">
                    <div className="form-control">
                        <label htmlFor="job-company">COMPANY NAME</label>
                        <input type="text" className="job-company" id="job-company"
                            required />
                    </div>

                    <div className="form-control">
                        <label htmlFor="job-from-to">EMPLOYED FROM - TO</label>
                        <input type="text" className="job-from-to" id="job-from-to"
                            required />
                    </div>
                </div>
                <div className="form-control special work">
                    <label htmlFor="desc">DESCRIPTION</label>
                    <textarea name="desc" id="desc" cols="5" rows="2" maxLength={200}></textarea>
                </div>
                <div className="work-btn">
                    <button className='btn submit-work add' onClick={addWorkHandler}>ADD</button>
                    <button className='btn submit-work close' onClick={closeWorkHandler}>CLOSE</button>
                </div>
            </div>
        </>)
}
export default Workform;