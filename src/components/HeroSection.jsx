import { ChevronRight } from 'lucide-react'
import demoImg from '../assets/demo.png'
import Tag from './Tag'

const HeroSection = () => {
  return (
    <div>
      <section className="hero-section text-center mt-32 flex flex-col">
        <Tag>
          <div className="flex items-center cursor-pointer">
            <span className="">Nexx v0.1</span>{' '}
            <ChevronRight className="w-6 h-6 ml-1 text-indigo-300 overflow-visible" />
          </div>
        </Tag>
        <h1 className="text-4xl font-extrabold leading-[1.15] text-black sm:text-6xl">
          Launch Your SASS
          <br />
          <span className="bg-gradient-to-r from-pink-500 via-indigo-600 to-pink-500 bg-clip-text text-transparent">
            In Minutes Not Days
          </span>
        </h1>

        <h2 className="mt-5 text-gray-600 sm:text-xl">
          Nexx is an open-source tool for developers who want to launch their
          ideas faster.
        </h2>
        <div className="flex  mx-auto mt-5 max-w-fit space-x-4 *:rounded-full *:mx-auto *:max-w-fit *:border *:px-5 *:py-2 *:text-sm *:font-medium *:shadow-sm *:hover:ring-2">
          <a
            href="#get-started"
            className="bg-black border-black text-white hover:ring-gray-400"
          >
            Get Started
          </a>
          <a
            href="#features"
            className="bg-white text-black border-gray-200 hover:ring-gray-300 "
          >
            Learn More
          </a>
        </div>
        <div className="mt-5 items-center justify-center">
          <img
            src={demoImg}
            alt="demo"
            className="mx-auto max-h-[300px] sm:max-h-[500px]"
          />
        </div>
      </section>
    </div>
  )
}

export default HeroSection
