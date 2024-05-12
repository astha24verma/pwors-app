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
import bgVid from '../src/assets/whitebg.mp4';

function App() {
  return (
    <UserProvider>
    <Router>
      <div className="relative h-auto w-screen text-white">
        <video className="absolute top-0 left-0 w-full h-full object-cover" autoPlay muted loop id="bgVid" style={{ zIndex: -1, pointerEvents: "none" }}>
          <source src={bgVid} type="video/mp4" /></video>
        <Header />
        <main className="relative flex justify-center items-center h-full">
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