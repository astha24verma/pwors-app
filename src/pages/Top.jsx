// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState, useContext } from 'react';
// import { useUserContext } from './UserContext';
import useSessionUserId from './useSessionUserId';
import { useNavigate } from 'react-router-dom';
import {
    BASE_URL,
    TOP_ADD_ENDPOINT,
    TOP_GET_BY_COLOR_ENDPOINT,
    TOP_GET_BY_GENRE_ENDPOINT,
} from './apiEndpoints';

function Top() {
    const { userId, loading } = useSessionUserId();
    const navigate = useNavigate();

    useEffect(() => {
        if (!loading && !userId) {
            navigate('/login');
        }
    }, [userId, navigate, loading]);
    
    const [formData, setFormData] = useState({
        name: '',
        color: '',
        color_type: '',
        gender: '',
        genre: '',
        userId: userId
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        if (formData.imageUrl && formData.userId) {
            console.log('Form data:', formData);
            fetch(`${BASE_URL}${TOP_ADD_ENDPOINT}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        }
    }, [formData]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const fileInput = document.getElementById('fileInput');
        const file = fileInput.files[0];
        
        if (!file) {
            console.error('No file selected');
            return;
        }

        const imageUrl = await uploadImageToCloudinary(file);
        console.log('Image URL from handle submit', imageUrl);
        setFormData({ ...formData, imageUrl, userId });
    };

    const uploadImageToCloudinary = async (file) => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'usjlsnfx');

        try {
            const cloudinaryResponse = await fetch('https://api.cloudinary.com/v1_1/dii4sv9ql/image/upload', {
                method: 'POST',
                body: formData
            });

            if (!cloudinaryResponse.ok) {
                throw new Error('Error uploading image to Cloudinary');
            }

            const cloudinaryData = await cloudinaryResponse.json();
            const imageUrl = cloudinaryData.url;
            console.log('Image URL:', imageUrl);
            return imageUrl;
        } catch (error) {
            throw new Error('Error uploading image to Cloudinary: ' + error.message);
        }
    };

    const handleColorChange = (e) => {
        fetch(`${BASE_URL}${TOP_GET_BY_COLOR_ENDPOINT}?color=${e.target.value}&userId=${userId}`)
        .then(response => response.json())
        .then(data => {
            data.forEach(item => {
                console.log(item.imageUrl);  // This will log all image URLs that comes in response
            });
            // console.log(data[0].imageUrl); // This will log the first image URL
        })  
        .catch(error => console.error('Error:', error));
    }

    const handleGenreChange = (e) => {
        fetch(`${BASE_URL}${TOP_GET_BY_GENRE_ENDPOINT}?Genre=${e.target.value}&userId=${userId}`)
        .then(response => response.json())
        .then(data => {
            data.forEach(item => {
                console.log(item.imageUrl);  // This will log all image URLs that comes in response
            });
            // console.log(data[0].imageUrl); // This will log the first image URL
        })
        .catch(error => console.error('Error:', error));
    }

    return (
        <div>
        <h1>Top Component</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            <input type="file" id="fileInput" />
            <select name="color" value={formData.color} onChange={handleChange} required>
                <option value="">Select color</option>
                <option value="RED">Red</option>
                <option value="YELLOW">Yellow</option>
                <option value="BLUE">Blue</option>
                <option value="GREEN">Green</option>
                <option value="BLACK">Black</option>
                <option value="WHITE">White</option>
                <option value="GREY">Grey</option>
                <option value="VIOLET">Violet</option>
                <option value="ORANGE">Orange</option>
                <option value="INDIGO">Indigo</option>
            </select>
            <select name="color_type" value={formData.color_type} onChange={handleChange} required>
                <option value="">Select color type</option>
                <option value="DARK">Dark</option>
                <option value="LIGHT">Light</option>
                <option value="MID">Mid</option>
            </select>
            <select name="genre" value={formData.genre} onChange={handleChange} required>
                <option value="">Select genre</option>
                <option value="CASUAL">Casual</option>
                <option value="FORMAL">Formal</option>
                <option value="SPORTS">Sports</option>
                <option value="OCCASIONAL">Occasional</option>
                <option value="ETHNIC">Ethnic</option>
            </select>
            <select name="gender" value={formData.gender} onChange={handleChange} required>
                <option value="">Select gender</option>
                <option value="MALE">Male</option>
                <option value="FEMALE">Female</option>
                <option value="OTHER">Other</option>
            </select>
            <button onClick={handleSubmit} type="submit">Add Top</button>
        </form>
        <div>
            <select id='colorSelect' name="color" onChange={handleColorChange}>
                <option value="">Select color</option>
                <option value="RED">Red</option>
                <option value="YELLOW">Yellow</option>
                <option value="BLUE">Blue</option>
                <option value="GREEN">Green</option>
                <option value="BLACK">Black</option>
                <option value="WHITE">White</option>
                <option value="GREY">Grey</option>
                <option value="VIOLET">Violet</option>
                <option value="ORANGE">Orange</option>
                <option value="INDIGO">Indigo</option>
            </select>
        </div>
        <div>
            <select id='genreSelect' name="genre" onChange={handleGenreChange}>
                <option value="">Select genre</option>
                <option value="CASUAL">Casual</option>
                <option value="FORMAL">Formal</option>
                <option value="SPORTS">Sports</option>
                <option value="OCCASIONAL">Occasional</option>
                <option value="ETHNIC">Ethnic</option>
            </select>
        </div>
        </div>
    );
}

export default Top;
