
const ContactForm = ({ contact, setContact }) => {

    const emailHandler = () => {
        const email = document.querySelector('#email');
        setContact({ ...contact, email: email.value });
    }
    const phoneHandler = () => {
        const phone = document.querySelector('#phone');
        setContact({ ...contact, phone: phone.value });
    }
    const linkHandler = () => {
        const link = document.querySelector('#link');
        setContact({ ...contact, link: link.value });
    }
    const addressHandler = () => {
        const address = document.querySelector('#address');
        setContact({ ...contact, address: address.value });
    }
    const aboutHandler = () => {
        const about = document.querySelector('#about');
        setContact({ ...contact, about: about.value });
    }
    const nameHandler = () => {
        const name = document.querySelector('#full-name');
        // setName(name.value.toUpperCase());
        setContact({ ...contact, name: name.value.toUpperCase() });
    }
    const titleHandler = () => {
        const title = document.querySelector('#title');
        setContact({ ...contact, title: title.value.toUpperCase() });
    }

    return (
        <div className="">
            <div className="form-group">
                <div className="form-control">
                    <label htmlFor="full-name">NAME</label>
                    <input type="text" className="full-name" id="full-name"
                        maxLength={20}
                        placeholder={contact.name.toUpperCase()}
                        onChange={nameHandler}
                        required />
                </div>
                <div className="form-control">
                    <label htmlFor="phone">TITLE</label>
                    <input type="text" className="title" id="title"
                        maxLength={20}
                        placeholder={contact.title.toUpperCase()}
                        onChange={titleHandler}
                        minLength={10} required />
                </div>
            </div>
            <div className="form-group">
                <div className="form-control">
                    <label htmlFor="email">EMAIL</label>
                    <input type="email" className="email" id="email"
                        maxLength={22}
                        placeholder={contact.email}
                        onChange={emailHandler}
                        required />
                </div>
                <div className="form-control">
                    <label htmlFor="phone">PHONE NUMBER</label>
                    <input type="tel" className="phone" id="phone"
                        pattern="^\d{3}-?\d{3}-?\d{4}|(\(\d{3}\)-?\d{3}-?\d{4})"
                        placeholder={contact.phone}
                        onChange={phoneHandler}
                        minLength={10} maxLength={15} required />
                </div>
            </div>
            <div className="form-group">
                <div className="form-control">
                    <label htmlFor="link">LINK</label>
                    <input type="link" className="link" id="link"
                        placeholder={contact.link}
                        maxLength={30}
                        onChange={linkHandler}
                        required />
                </div>
                <div className="form-control">
                    <label htmlFor="address">ADDRESS</label>
                    <input type="address" className="address" id="address"
                        placeholder={contact.address}
                        maxLength={40}
                        onChange={addressHandler}
                        required />
                </div>
            </div>
            <div className="form-control special">
                <label htmlFor="about">ABOUT ME</label>
                <textarea name="about" id="about" cols="50" rows="5" maxLength={200}
                    placeholder={contact.about}
                    onChange={aboutHandler}
                ></textarea>
            </div>
        </div>
    )
}

export default ContactForm;