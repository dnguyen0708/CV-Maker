/* eslint-disable jsx-a11y/alt-text */
import profile_img from '../asset/img/blank-profile-pic.png';
import React, { useState } from 'react';
const ProfileImage = () => {

    const [image, setImage] = useState(profile_img);
    const uploadImage = () => {
        const upload = document.querySelector('#img');
        upload.click();
    }
    const updateImage = (e) => {
        setImage(URL.createObjectURL(e.target.files[0]));
    }

    return (
        <div className="profile-img">
            <input type="image" src={image} className="cover-img" onClick={uploadImage}></input>
            <input type="file" id="img" name="img" accept="image/*" onChange={updateImage}></input>
        </div>
    )
}

export default ProfileImage;