import React from 'react'

function HeroSection() {
  return (
    <div className="relative mx-auto flex h-[75vh] flex-col justify-center px-32 py-4 text-2xl text-white">
      <div
        className="absolute inset-0 bg-cover bg-center brightness-50 filter"
        style={{
          backgroundImage:
            "url('https://gdtffvonnguufizhazwx.supabase.co/storage/v1/object/public/test/529defad-1845-4f27-ae95-8e88e1220fca.png')",
        }}
      />
      <div className="mx-auto flex h-full w-full items-center">
        <div className="relative z-10 flex w-4/5 max-w-sm flex-col items-start">
          <div className="w-full">
            <div className="text-left text-5xl font-semibold leading-tight">
              <span className="block">Custom</span>
              <span className="block">Printed</span>
              <span className="block">T-Shirts</span>
              <span className="block">& Apparel</span>
            </div>
            <div className="mt-5 text-left text-base leading-relaxed opacity-70">
              Exceeding custom printing in Ottawa and the surrounding area. Guaranteed accuracy,
              quality, and delivery.
            </div>
            <button className="mt-8 inline-block rounded-full bg-white px-8 py-3 text-base font-medium text-gray-700 transition-colors duration-300 hover:bg-gray-200">
              GET A QUOTE
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
