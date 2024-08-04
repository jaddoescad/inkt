import React from 'react'

function ServicesSection() {
  const services = [
    {
      title: 'Screen Printing',
      description:
        'Long-lasting and durable. Screen printing is great for designs with bold colors and large orders.',
      imgSrc:
        'https://web-assets.cdn.shirtspace.com//representations/proxy/eyJfcmFpbHMiOnsiZGF0YSI6MTUwMTQsInB1ciI6ImJsb2JfaWQifX0=--520ddf83be0918ee7255a4788f0ee4cc3ad928f3/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJqcGciLCJyZXNpemUiOiI2ODB4NDMwIn0sInB1ciI6InZhcmlhdGlvbiJ9fQ==--217915a83f3f932469c560fbeae52b315d9110ee/how-to-screen-print-on-t-shirts-blog-revamp.jpg',
    },
    {
      title: 'Embroidery',
      description: 'Custom embroidery gives hats, polos, and apparel a professional feel.',
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR75JgIyw2UUMZaFSRyArzYazqDTbRbbPuY8g&s',
    },
    {
      title: 'Digitization',
      description:
        'Our in-house graphic designer will get your artwork prepped and ready for printing.',
      imgSrc: 'https://blog.uberprints.com/content/images/2021/07/workspace-design-your-own-2.jpg',
    },
  ]

  return (
    <div className="bg-gray-100 p-4 pb-10 text-center">
      <h2 className="mb-1 mt-4 py-2 text-2xl font-bold">Our Services</h2>
      <div className="flex flex-wrap justify-center">
        {services.map((service, index) => (
          <div key={index} className="m-2 flex w-60 flex-col overflow-hidden rounded-lg bg-white">
            <img
              src={service.imgSrc}
              alt={service.title}
              className="mb-2 h-44 w-full object-cover"
            />
            <h3 className="mb-2 mt-3 px-5 text-sm font-bold">{service.title}</h3>
            <p className="mt-1 flex-grow px-5 pb-4 text-xs leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ServicesSection
