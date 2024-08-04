import AboutSection from '@/components/About'
import FeaturesSection from '@/components/Features'
import Footer from '@/components/Footer'
import GallerySection from '@/components/Gallery'
import Header from '@/components/Header'
import HeroSection from '@/components/Hero'
import ServicesSection from '@/components/Services'
import React from 'react'

function App() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <FeaturesSection />
    </div>
  )
}

export default App
