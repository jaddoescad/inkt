import React from 'react';


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
  ];

  return (
    <div className="bg-gray-100 py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-center text-3xl font-bold">Our Services</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col overflow-hidden rounded-lg bg-white shadow">
              <img
                src={service.imgSrc}
                alt={service.title}
                className="h-48 w-full object-cover"
              />
              <div className="flex flex-grow flex-col p-6">
                <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
                <p className="mt-auto text-sm text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;