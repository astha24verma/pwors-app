import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="flex space-x-4">
      <Link to="/login" className="hover:text-gray-300">
        Login
      </Link>
      <Link to="/signup" className="hover:text-gray-300">
        Sign Up
      </Link>
      <button className="hover:text-gray-300">Logout</button>
    </div>
  )
}

export default Navbar