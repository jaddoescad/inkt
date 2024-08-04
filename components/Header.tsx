import React from 'react'

function Header() {
  return (
    <div>
      <div className="mx-auto flex items-center justify-center bg-gray-800 px-4 py-2 font-sans text-sm text-gray-200">
        <span className="mr-4 whitespace-nowrap">123-456-7890</span>
        <span className="mr-4 whitespace-nowrap">-</span>
        <span className="mr-4 whitespace-nowrap">Free Delivery over $50</span>
        <span className="mr-4 whitespace-nowrap">-</span>
        <span className="whitespace-nowrap">No Minimums</span>
      </div>
      <header className="mx-auto flex max-w-[1400px] items-center justify-between bg-white px-20 py-4">
        <div className="flex-1">
          <div className="inline-block">
            <img
              src="https://gdtffvonnguufizhazwx.supabase.co/storage/v1/object/public/test/919cb172-25de-421c-90ea-3e66b8c0338d.png"
              alt="Logo"
              className="h-10 w-auto max-w-xs"
            />
          </div>
        </div>
        <nav className="flex-2 flex justify-center">
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
        <div className="flex flex-1 justify-end">
          <button className="cursor-pointer rounded-full bg-gray-600 px-6 py-3 font-normal text-white">
            REQUEST A QUOTE
          </button>
        </div>
      </header>
    </div>
  )
}

export default Header
