// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

function Signup() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [userId, setUserId] = useState(null);

    const handleSignup = async () => {
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        // Prepare data for the API call
        const data = {
            username,
            password,
        };

        try {
            const response = await fetch('http://localhost:8080/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            // Check if the request was successful
            if (response.ok) {
                const responseData = await response.json();
                const { userId } = responseData;

                setUserId(userId);

                alert('Account created successfully');
            } else {
                const errorData = await response.json();
                alert(`Error: ${errorData}`);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while creating the account');
        }
    };

    return (
        <div className="bg-grey-lighter min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                    <input 
                        type="text"
                        className="block bg-slate-100 text-black border border-grey-light w-full p-3 rounded mb-4"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} 
                        placeholder="Username" />
                    <input 
                        type="password"
                        className="block bg-slate-100 text-black border border-grey-light w-full p-3 rounded mb-4"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password" />
                    <input 
                        type="password"
                        className="block bg-slate-100 text-black border border-grey-light w-full p-3 rounded mb-4"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Confirm Password" />

                    <button
                        type="submit"
                        onClick={handleSignup}
                        className="w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
                    >
                        Create Account
                    </button>

                    {userId && <p>User ID: {userId}</p>}
                    console.log(userId)

                    <div className="text-center text-sm text-grey-dark mt-4">
                        By signing up, you agree to the 
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Terms of Service
                        </a> and 
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Privacy Policy
                        </a>
                    </div>
                </div>

                <div className="text-grey-dark mt-6">
                    Already have an account? 
                    <a className="no-underline border-b border-blue text-blue" href="../login/">
                        Log in
                    </a>.
                </div>
            </div>
        </div>
    );
}

export default Signup;
