'use client'
import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="w-full bg-white">
      <div className="mx-auto flex items-center justify-center bg-gray-800 px-4 py-2 font-sans text-sm text-gray-200">
        <span className="mr-4 whitespace-nowrap">(343) 202-0766</span>
        <span className="mr-4 whitespace-nowrap">-</span>
        <span className="mr-4 whitespace-nowrap">Free Delivery over $50</span>
        <span className="mr-4 whitespace-nowrap">-</span>
        <span className="whitespace-nowrap">No Minimums</span>
      </div>
      <header className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        <div className="flex-1">
          <div className="inline-block">
            <img
              src="https://gdtffvonnguufizhazwx.supabase.co/storage/v1/object/public/test/919cb172-25de-421c-90ea-3e66b8c0338d.png"
              alt="Logo"
              className="h-10 w-auto max-w-xs"
            />
          </div>
        </div>
        <nav className="md:flex-2 hidden md:flex md:justify-center">
          <a href="https://www.google.com" className="mx-4 font-medium text-gray-800">
            Home
          </a>
          <a href="https://www.google.com" className="mx-4 font-medium text-gray-800">
            About
          </a>
          <a href="https://www.google.com" className="mx-4 font-medium text-gray-800">
            Services
          </a>
          <a href="https://www.google.com" className="mx-4 font-medium text-gray-800">
            Contact
          </a>
        </nav>
        <div className="hidden flex-1 justify-end md:flex">
          <button className="cursor-pointer rounded-full  px-6 py-3 font-bold text-white" style={{ backgroundColor: '#B0B7B2' }}>
            REQUEST A QUOTE
          </button>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-800">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="flex h-full flex-col items-center justify-center">
            <button onClick={toggleMenu} className="absolute right-4 top-4 text-gray-800">
              <X size={24} />
            </button>
            <nav className="flex flex-col items-center space-y-4">
              <a href="https://www.google.com" className="text-xl font-medium text-gray-800">
                Home
              </a>
              <a href="https://www.google.com" className="text-xl font-medium text-gray-800">
                About
              </a>
              <a href="https://www.google.com" className="text-xl font-medium text-gray-800">
                Services
              </a>
              <a href="https://www.google.com" className="text-xl font-medium text-gray-800">
                Contact
              </a>
            </nav>
            <button className="mt-8 cursor-pointer rounded-full bg-gray-600 px-6 py-3 font-normal text-white">
              REQUEST A QUOTE
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Header