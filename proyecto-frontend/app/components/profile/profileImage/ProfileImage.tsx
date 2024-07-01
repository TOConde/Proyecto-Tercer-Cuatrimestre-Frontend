'use client';

import './ProfileImage.css'
import React, { useState } from 'react';
import Image from 'react-bootstrap/Image';

function ProfileImage() {
    const [img, setImg] = useState<string | null>(null);
    const [fileName, setFileName] = useState('Formato .jpg/.jpeg/.png');

    const handleChangeImg = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setImg(URL.createObjectURL(file));
            setFileName(file.name);
        }
    };

    return (
        <div className="profileImg" >
            <input
                type="file"
                accept="image/*"
                id="upload"
                style={{ display: 'none' }}
                onChange={handleChangeImg}
            />
            <label htmlFor="upload">
                <Image 
                    className="userImg"
                    src={img || "https://via.placeholder.com/150"} 
                    roundedCircle 
                    onClick={() => document.getElementById('upload')?.click()}
                />
            </label>
        </div>
    );
}

export default ProfileImage;