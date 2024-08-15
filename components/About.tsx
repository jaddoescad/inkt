import React from 'react'

export default function AboutSection() {
  return (
    <div className="flex flex-col font-sans">
      <div className="mx-auto max-w-[1000px] flex-1 px-12 py-10">
        <h2 className="mb-2 text-center text-xs font-semibold text-gray-800">
          MAKE SOMETHING UNIQUE WITH US
        </h2>
        <h3 className="mb-1 mt-0 text-center text-4xl font-extrabold text-gray-800">
          INK'T Screen Printing
        </h3>
        <p className="mb-10 mt-0 text-center text-base font-bold text-gray-600">
          Printed in Ottawa, CA
        </p>
        <div className="mb-2 flex flex-col justify-between md:flex-row">
          <p className="mb-4 flex-1 text-center text-sm leading-relaxed text-gray-800 md:mb-0 md:mr-4 md:text-left">
            <span className="font-bold">
              Previously Fiore Apparel, we have been Ottawa's trusted screen printing and embroidery
              company since 2005, providing a one-stop shop for quality custom clothing and
              dependable service to all our clients.
            </span>
            <br />
            <br />
            At our core, we take immense pride in our work and are dedicated to providing the utmost
            care to our community. We believe that each piece we create represents not only our
            craftsmanship but also the values and identity of the individuals and organizations we
            serve.
          </p>
          <p className="flex-1 text-center text-sm leading-relaxed text-gray-800 md:ml-4 md:text-left">
            Over the years, we have built a loyal clientele spanning a wide range of industries and
            interests. From local schools and sports teams to renowned brands and businesses, we
            have had the privilege of serving diverse customers who trust us to bring their ideas to
            life. Whether you need custom shirts for corporate events, promotional campaigns, team
            uniforms, merchandise, or any other occasion, we are here to make it happen.
          </p>
        </div>
        <div className="mt-8 flex flex-col justify-between py-4 sm:flex-row">
          <div className="mb-4 w-full text-center sm:mb-0 sm:w-1/2 sm:text-right mx-4">
            <a
              href="https://www.google.com"
              className="inline-block rounded-full border-2 border-black bg-black px-5 py-3 text-sm font-bold text-white"
            >
              HOW IT WORKS
            </a>
          </div>
          <div className="w-full text-center sm:w-1/2 sm:text-left mx-4">
            <a
              href="https://www.google.com"
              className="inline-block rounded-full border-2 border-black bg-transparent px-5 py-3 text-sm font-bold text-black"
            >
              CONTACT
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}