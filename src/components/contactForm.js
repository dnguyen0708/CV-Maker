

const ContactForm = ({
    email, setEmail,
    phone, setPhone,
    link, setLink,
    address, setAddress,
    name, setName,
    about, setAbout,
    title, setTitle
}) => {
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
    const nameHandler = () => {
        const name = document.querySelector('#full-name');
        setName(name.value.toUpperCase());
    }
    const titleHandler = () => {
        const title = document.querySelector('#title');
        setTitle(title.value.toUpperCase());
    }

    return (
        <div className="">
            <div className="form-group">
                <div className="form-control">
                    <label htmlFor="full-name">NAME</label>
                    <input type="text" className="full-name" id="full-name"
                        placeholder={name.toUpperCase()}
                        onChange={nameHandler}
                        required />
                </div>
                <div className="form-control">
                    <label htmlFor="phone">TITLE</label>
                    <input type="text" className="title" id="title"
                        placeholder={title.toUpperCase()}
                        onChange={titleHandler}
                        minLength={10} required />
                </div>
            </div>
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
                <textarea name="about" id="about" cols="50" rows="5" maxLength={200}
                    placeholder={about}
                    onChange={aboutHandler}
                ></textarea>
            </div>
        </div>
    )
}

export default ContactForm;