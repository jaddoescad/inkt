import React from 'react'
import GoogleMap from './map'

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-5xl px-4 py-20 md:px-8">
        <div className="flex flex-wrap">
          <div className="mb-6 w-full md:mb-0 md:w-1/4">
            <img
              src="https://gdtffvonnguufizhazwx.supabase.co/storage/v1/object/public/test/60175d51-9086-4a73-807d-15983d273132.png"
              alt="Logo"
              className="mb-4 h-12"
            />
          </div>
          <div className="flex w-full flex-wrap justify-end md:w-3/4">
            <div className="mb-6 w-full px-4 md:mb-0 md:w-1/2 lg:w-1/3">
              <h3 className="mb-4 text-lg font-semibold">Contact Info</h3>
              <p className="mb-2 text-sm">1 Jerrylin cres, Ottawa, ON K2J 1H3</p>
              <p className="mb-2 text-sm">Phone: (343) 202-0766</p>
              <p className="text-sm">Email: info@example.com</p>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <h3 className="mb-4 text-lg font-semibold">Our Services</h3>
              <ul>
                <li className="mb-2">
                  <a
                    href="#"
                    className="text-sm transition-colors duration-300 hover:text-gray-600"
                  >
                    Screen Printing
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="text-sm transition-colors duration-300 hover:text-gray-600"
                  >
                    Embroidery
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm transition-colors duration-300 hover:text-gray-600"
                  >
                    Digitization
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
<GoogleMap/>
      <div className="bg-gray-900 py-4">
        <div className="mx-auto max-w-7xl px-4 text-center text-sm text-white md:px-8">
          <p>© {new Date().getFullYear()} INK'T. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer