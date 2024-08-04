import React, { useEffect } from 'react'

function GallerySection() {
  const images = [
    'https://images.squarespace-cdn.com/content/v1/5a802676b7411c2497540b80/1610457880081-91BSTJGD5MNGJ43TUNKH/TSHIRT-DESIGN-TEXINTEL.jpg',
    'https://files.cdn.printful.com/o/upload/bfl-image/be/10415_l_cooking%20love.jpg',
    'https://news.ohio.edu/sites/ohio.edu.news/files/2023-05/Tshirt%204.jpeg',
    'https://i.pinimg.com/564x/97/9d/b5/979db57c692b3a8fb73dc0dff7cac85e.jpg',
    'https://cdn.logojoy.com/wp-content/uploads/20230824151430/pet-rescue-t-shirt-design-idea.jpg',
    'https://reallygooddesigns.com/wp-content/uploads/2021/11/Concept-T-Shirt-Design-Ideas-23.png',
    'https://i.pinimg.com/736x/e0/f3/66/e0f3660feceb06d502f4b4b85408f1d8.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTgNAvPILFIBF7EBhbFJ-aX5lvdHqW2NP2-g&s',
  ]

  return (
    <div className="mx-auto max-w-7xl px-10 py-16">
      <div className="grid grid-cols-2 justify-center gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="aspect-square bg-cover bg-center"
            style={{ backgroundImage: `url('${image}')` }}
          ></div>
        ))}
      </div>
    </div>
  )
}

export default GallerySection
