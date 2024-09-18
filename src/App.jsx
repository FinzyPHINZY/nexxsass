import './App.css'
import FeaturesSection from './components/FeaturesSection'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import PricingSection from './components/PricingSection'
import RoadMapSection from './components/RoadMapSection'
import Slider from './components/Slider'
import TestimonialsSection from './components/TestimonialsSection'
import { partnersLogo } from './data/partners'

export default function App() {
  return (
    <>
      <div className="w-screen min-h-screen fixed z-0 flex justify-center px-6 py-40 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-25"></div>
        <img
          src="/mesh.svg"
          alt=""
          className="opacity-15 absolute bottom-1  z-10"
        />
        <div className="bg-gradient-to-c from-transparent via-transparent to-white absolute inset-0 z-20"></div>
      </div>
      <div className="relative z-20">
        <Navbar />
        <div className="container mx-auto">
          <HeroSection />
          <Slider images={partnersLogo} />
          <RoadMapSection />
          <FeaturesSection />
          <TestimonialsSection />
          <PricingSection />
          <Footer />
        </div>
      </div>
    </>
  )
}
