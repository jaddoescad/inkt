import React from 'react'

function Footer() {
  return (
    <footer className="mt-8 bg-white py-8">
      <div className="mx-auto flex max-w-5xl items-start justify-between px-4">
        <div className="mb-4 w-1/4 flex-none">
          <img
            src="https://gdtffvonnguufizhazwx.supabase.co/storage/v1/object/public/test/60175d51-9086-4a73-807d-15983d273132.png"
            alt="Logo"
            className="h-auto max-w-xs"
          />
        </div>
        <div className="mb-4 w-1/3 flex-none">
          <h3 className="mb-4 mt-0 text-base font-bold">Contact Info</h3>
          <p className="mb-2 text-sm">123 Main Street, City, State 12345</p>
          <p className="mb-2 text-sm">Phone: (123) 456-7890</p>
          <p className="mb-2 text-sm">Email: info@example.com</p>
        </div>
        <div className="mb-4 w-1/3 flex-none">
          <h3 className="mb-4 mt-0 text-base font-bold">Our Services</h3>
          <ul className="m-0 list-none p-0">
            <li className="mb-2">
              <a href="https://www.google.com" className="text-sm text-gray-700">
                Screen Printing
              </a>
            </li>
            <li className="mb-2">
              <a href="https://www.google.com" className="text-sm text-gray-700">
                Embroidery
              </a>
            </li>
            <li className="mb-2">
              <a href="https://www.google.com" className="text-sm text-gray-700">
                Digitization
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-300 pt-4 text-center">
        <p className="text-sm text-gray-500">© 2023 Your Company Name. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
