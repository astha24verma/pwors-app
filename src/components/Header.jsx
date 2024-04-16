import Navbar from './Navbar'

function Header() {
  return (
    <header>
      <nav className="flex justify-between items-center px-4 py-2 max-w-full mx-auto">
        <div className="text-2xl font-bold">My App</div>
        <Navbar />
      </nav>
    </header>
  )
}

export default Header