import React from 'react'

function FeaturesSection() {
  const features = [
    {
      title: 'Artwork Made Easy',
      description:
        "We don't expect you to be a graphic designer. Send us what you have and we'll work our magic!",
      imgSrc:
        'https://gdtffvonnguufizhazwx.supabase.co/storage/v1/object/public/test/ee979fb6-c1e5-4fb7-b3b6-902fd31e44e5.png',
    },
    {
      title: 'Family Run',
      description:
        "As a small, family-run business, you'll always get in touch with a real person (usually Sabrina).",
      imgSrc:
        'https://gdtffvonnguufizhazwx.supabase.co/storage/v1/object/public/test/a8ee1fef-8fee-4d48-8f6a-7cbc7c7a51e1.png',
    },
    {
      title: 'Custom Printing',
      description:
        "We'll supply the apparel! Just provide your graphic and leave the printing to us.",
      imgSrc:
        'https://gdtffvonnguufizhazwx.supabase.co/storage/v1/object/public/test/6082f546-9de8-4cb4-a880-7fb22036af7b.png',
    },
    {
      title: 'Contract Printing',
      description:
        'Already have your t-shirts and ready to print? You provide the graphic and leave the printing to us.',
      imgSrc:
        'https://gdtffvonnguufizhazwx.supabase.co/storage/v1/object/public/test/d315ac68-6382-4b59-badc-d4d92691d2dc.png',
    },
  ]

  return (
    <div className="mx-auto box-border flex w-full flex-wrap justify-between overflow-hidden bg-gray-300 px-4 sm:px-6 lg:px-10 py-8 sm:py-12">
      <div className="mx-auto flex max-w-[1200px] flex-wrap justify-center">
        {features.map((feature, index) => (
          <div
            key={index}
            className="mb-8 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 overflow-hidden rounded-md bg-transparent text-center px-2 max-w-[300px]"
          >
            <div
              className="h-24 bg-contain bg-center bg-no-repeat opacity-70 mb-4"
              style={{ backgroundImage: `url('${feature.imgSrc}')` }}
            ></div>
            <div className="py-2">
              <h3 className="mb-2 text-center text-sm font-semibold opacity-60">{feature.title}</h3>
              <p className="text-center text-xs text-gray-800 opacity-60">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FeaturesSection