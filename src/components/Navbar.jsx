import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <nav>
        <div class="">
          <div class="flex justify-between h-16 px-10 shadow items-center">
            <div class="flex items-center space-x-8">
              <h1 class="text-xl lg:text-4xl font-bold cursor-pointer">Wardrobe</h1>
              <div class="hidden md:flex justify-around space-x-4">
                <a href="#" class="hover:text-indigo-600 text-gray-300">Home</a>
                <a href="#" class="hover:text-indigo-600 text-gray-300">About</a>
                <a href="#" class="hover:text-indigo-600 text-gray-300">Service</a>
                <a href="#" class="hover:text-indigo-600 text-gray-300">Contact</a>
              </div>
            </div>
            <div className="flex space-x-4 items-center">
              <Link to="/login" className="bg-indigo-600 px-4 py-2 rounded text-white hover:bg-indigo-500 text-sm">
                Login
              </Link>
              <Link to="/signup" className="bg-indigo-600 px-4 py-2 rounded text-white hover:bg-indigo-500 text-sm">
                Sign Up
              </Link>
              <button className="hover:text-gray-300">Logout</button>
            </div>
           
          </div>
        </div>
      </nav>
    </div>
    
  )
}

export default Navbar