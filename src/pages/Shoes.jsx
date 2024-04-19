// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState, useContext } from 'react';
import { useUserContext } from './UserContext';
import {
    BASE_URL,
    ADD_SHOES_ENDPOINT,
    GET_SHOES_BY_COLOR_ENDPOINT,
    GET_SHOES_BY_GENRE_ENDPOINT,
} from './apiEndpoints';

function Shoes() {
    const user = useUserContext();
    // console.log('User:', user);
    
    const [formData, setFormData] = useState({
        name: '',
        color: '',
        color_type: '',
        gender: '',
        genre: '',
        userId: user.user
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Replace your existing handleSubmit function with this
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('Form data:', formData);
        fetch(`${BASE_URL}${ADD_SHOES_ENDPOINT}`, {
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
    };

    const handleColorChange = (e) => {
        fetch(`${BASE_URL}${GET_SHOES_BY_COLOR_ENDPOINT}?color=${e.target.value}&userId=${user.user}`)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
    
    }

    const handleGenreChange = (e) => {
        fetch(`${BASE_URL}${GET_SHOES_BY_GENRE_ENDPOINT}?Genre=${e.target.value}&userId=${user.user}`)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
    }

    return (
        <div>
        <h1>Shoes Component</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
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
            <button onClick={handleSubmit} type="submit">Add Shoes</button>
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

export default Shoes;
