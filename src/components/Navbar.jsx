import { Link, useNavigate } from 'react-router-dom';
import React, { useContext } from 'react';
import { UserContext } from '../pages/UserContext';

function Navbar() {
  const { user, dispatch } = useContext(UserContext);
  return (
    <div className="fixed w-full z-10 top-0">
      <nav>
        <div className="">
          <div className="flex justify-between h-16 px-10 shadow items-center">
            <div className="flex items-center space-x-8">
              <h1 className="text-xl lg:text-4xl font-bold cursor-pointer">Wardrobe</h1>
              <div className="hidden md:flex justify-around space-x-4">
                <a href="#" className="hover:text-indigo-600 text-gray-300">Home</a>
                <a href="#" className="hover:text-indigo-600 text-gray-300">About</a>
                <a href="#" className="hover:text-indigo-600 text-gray-300">Service</a>
                <a href="#" className="hover:text-indigo-600 text-gray-300">Contact</a>
              </div>
            </div>
            <div className="flex space-x-4 items-center">
            {user ? (
              <a href="/">
                <button 
                    className="hover:text-gray-300" 
                    onClick={() => {
                        localStorage.removeItem('userId');
                    }}
                >
                    Logout
                </button>
              </a>
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