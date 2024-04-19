
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from './UserContext';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { setUser } = useUserContext();

    const handleLogin = async (e) => {
        e.preventDefault();

        const loginData = {
            username,
            password
        };

        try {
            const response = await fetch('http://localhost:8080/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginData)
            });

            if (response.ok) {
                const responseData = await response.json();
                console.log('Login successful', responseData);
                setUser(responseData.userId);
                
                navigate('/dashboard');
            } else {
                const errorData = await response.json();
                console.error('Login failed', errorData);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="h-screen flex justify-center">
            <div className="py-6 px-8 h-80 mt-20 bg-white rounded shadow-xl">
                <form onSubmit={handleLogin}>
                    <div className="mb-6">
                        <label htmlFor="username" className="block text-gray-800 font-bold">Username:</label>
                        <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter your username" className="w-full bg-slate-100 text-black border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600" />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-gray-800 font-bold">Password:</label>
                        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" className="w-full bg-slate-100 text-black border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600" />
                    </div>
                    
                    <button type="submit" className="cursor-pointer py-2 px-4 block mt-6 bg-indigo-500 text-white font-bold w-full text-center rounded">Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
