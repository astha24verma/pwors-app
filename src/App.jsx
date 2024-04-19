import './input.css'
// eslint-disable-next-line no-unused-vars
import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'; 
import { UserProvider } from './pages/UserContext'
import Top from './pages/Top'
import Bottom from './pages/Bottom'
import Shoes from './pages/Shoes'

function App() {
  return (
    <UserProvider>
    <Router>
      <div className="h-auto w-screen bg-gray-900 text-white">
        <Header />
        <main className="flex justify-center items-center h-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/top" element={<Top />} />
            <Route path="/bottom" element={<Bottom />} />
            <Route path="/shoes" element={<Shoes />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
    </UserProvider>
  );
}

export default App