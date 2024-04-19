// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState, useContext } from 'react';
import { UserContext } from './UserContext';



function Top() {
    const [, setTops] = useState([]);
    const user = useContext(UserContext);
    console.log('User:', user);
    
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
    console.log('Form data:', formData);
    fetch('http://localhost:8080/top/add', {
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
        // Handle error
    });
};

    useEffect(() => {
        fetch(`http://localhost:8080/top/getByColor?color=red&userId=${formData.userId}`)
        .then(response => response.json())
        .then(data => setTops(data))
        .catch(error => console.error('Error:', error));

        fetch(`http://localhost:8080/top/getByGenre?genre=genre&userId=${formData.userId}`)
        .then(response => response.json())
        .then(data => setTops(data))
        .catch(error => console.error('Error:', error));
    }, [formData.userId]);

    return (
        <div>
        <h1>Top Component</h1>
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
            <button type="submit">Add Top</button>
        </form>
        </div>
    );
}

export default Top;
