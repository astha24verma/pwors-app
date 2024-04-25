import { Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect } from 'react';
// import { UserContext } from '../pages/UserContext';
import useSessionUserId from '../pages/useSessionUserId';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  // const { user } = useContext(UserContext);

  const { userId, loading } = useSessionUserId();
  const navigate = useNavigate();

  useEffect(() => {
    // console.log('User:', userId, loading);
    if (!loading && !userId) {
        // navigate('/dashboard');
    }
}, [userId, navigate, loading]);

  
  return (
    <div className="fixed w-full z-10 top-0 bg-gray-800">
      <nav>
        <div className="">
          <div className="flex justify-between h-16 px-10 shadow items-center">
            <div className="flex items-center space-x-8">
              <h1 className="text-xl lg:text-4xl font-bold cursor-pointer">Wardrobe</h1>
              <div className="hidden md:flex justify-around space-x-4">
                <a href="/dashboard" className="hover:text-indigo-600 text-gray-300">Wardrobe</a>
                <a href="#" className="hover:text-indigo-600 text-gray-300">Styling</a>
                <a href="#" className="hover:text-indigo-600 text-gray-300">Planner</a>
                <a href="#" className="hover:text-indigo-600 text-gray-300">Contact</a>
              </div>
            </div>
            <div className="flex space-x-4 items-center">
            {userId ? (
              <Link to="/">
                
                <button 
                    className="hover:text-gray-300" 
                    onClick={() => {
                        localStorage.removeItem('userId');
                        console.log('Logged out');
                        navigate('/');
                        location.reload(); 
                    }}
                >
                    Logout 
                </button>
              </Link>
                      ) : (
                        <>
                          <Link to="/login" className="bg-indigo-600 px-4 py-2 rounded text-white hover:bg-indigo-500 text-sm">
                            Login
                          </Link>
                          <Link to="/signup" className="bg-indigo-600 px-4 py-2 rounded text-white hover:bg-indigo-500 text-sm">
                            Sign Up
                          </Link>
                        </>
                      )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;