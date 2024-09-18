import React from 'react'
import { features } from './features'
import Tagline from './Tagline'

const FeaturesSection = () => {
  return (
    <div className="flex items-center p-10 justify-center flex-col">
      <Tagline>Features</Tagline>
      <h2 className="font-extrabold text-3xl mb-8 pt-3">
        Intelligent Form Building
      </h2>
      <div className="mt-10 grid items-center grid-cols-1 gap-3 md:grid-cols-3 max-w-screen-xl">
        {features.map((feature, index) => (
          <div
            className="bg-white border border-indigo-400/30 rounded-lg shadow-lg p-6 h-full flex items-start space-x-4"
            key={index}
          >
            <div className="">
              <h3 className="font-semibold text-xl">{feature.title}</h3>
              <p className="text-gray-500">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FeaturesSection
