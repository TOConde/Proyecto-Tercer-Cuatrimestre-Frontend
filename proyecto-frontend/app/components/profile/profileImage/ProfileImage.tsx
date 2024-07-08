'use client';

import './ProfileImage.css';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'react-bootstrap/Image';
import { editUserImg, getUserById } from '@/app/services/User';
import { FaEdit } from 'react-icons/fa';

const ProfileImage: React.FC = () => {
    const [img, setImg] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const fetchUserImg = async () => {
            try {
                const response = await getUserById();
                if (response.data) {
                    setImg(response.data.urlUserImage);
                }
            } catch (e) {
                console.error('Error al recuperar la imagen del usuario.', e);
            }
        };

        fetchUserImg();
    }, []);

    const handleChangeImg = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const formData = new FormData();
            formData.append('img', file);

            try {
                await editUserImg(formData);
                setImg(URL.createObjectURL(file));
            } catch (error) {
                console.error('Error updating user image', error);
            }
        }
    };

    const handleClick = () => {
        fileInputRef.current?.click();
    };

    return (
        <div className="profileImg" onClick={handleClick}>
            <input
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={handleChangeImg}
                ref={fileInputRef}
            />
            <Image
                className="userImg"
                src={img || "https://via.placeholder.com/150"}
                roundedCircle
            />
            <div className="overlay">
                <FaEdit className="editIcon" />
            </div>
        </div>
    );
};

export default ProfileImage;