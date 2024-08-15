import React from 'react'

export default function HeroSection() {
  return (
    <div className="relative flex min-h-[75vh] flex-col justify-center text-2xl text-white">
      <div
        className="absolute inset-0 bg-cover bg-center brightness-50 filter"
        style={{
          backgroundImage:
            "url('https://gdtffvonnguufizhazwx.supabase.co/storage/v1/object/public/test/529defad-1845-4f27-ae95-8e88e1220fca.png')",
        }}
      />
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
        <div className="relative z-10 flex w-full flex-col items-center text-center md:items-start md:text-left">
          <div className="w-full max-w-sm">
            <h1 className="font-semibold leading-tight text-5xl">
              <span className="md:mb-2  block">Custom</span>
              <span className="md:mb-2 block">Printed</span>
              <span className="md:mb-2 block">T-Shirts</span>
              <span className="block">& Apparel</span>
            </h1>
            <p className="mt-5 text-base leading-relaxed text-md">
              Exceeding custom printing in Ottawa and the surrounding area. Guaranteed accuracy,
              quality, and delivery.
            </p>
            <button className="mt-8 inline-block rounded-full bg-white px-8 py-3 text-base font-medium text-gray-700 transition-colors duration-300 hover:bg-gray-200">
              GET A QUOTE
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}