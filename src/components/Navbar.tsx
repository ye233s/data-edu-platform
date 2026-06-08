import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, User } from 'lucide-react'

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-blue-700 font-bold text-2xl">DataLearn</span>
            </Link>
            <div className="hidden md:flex ml-10 space-x-8">
              <Link to="/" className="text-gray-700 hover:text-blue-700 font-medium">首页</Link>
              <Link to="/courses" className="text-gray-700 hover:text-blue-700 font-medium">课程中心</Link>
              <Link to="/achievements" className="text-gray-700 hover:text-blue-700 font-medium">成就中心</Link>
              <Link to="/profile" className="text-gray-700 hover:text-blue-700 font-medium">个人中心</Link>
            </div>
          </div>
          <div className="flex items-center">
            <button className="md:hidden ml-4" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-2 space-y-3">
            <Link to="/" className="block text-gray-700 hover:text-blue-700 font-medium py-2">首页</Link>
            <Link to="/courses" className="block text-gray-700 hover:text-blue-700 font-medium py-2">课程中心</Link>
            <Link to="/achievements" className="block text-gray-700 hover:text-blue-700 font-medium py-2">成就中心</Link>
            <Link to="/profile" className="block text-gray-700 hover:text-blue-700 font-medium py-2">个人中心</Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar