import React from 'react'
import { pricingPlans } from '../data/pricing'
import PlanCard from './PlanCard'
import Tagline from './Tagline'

const PricingSection = () => {
  return (
    <div className="flex flex-col items-center justify-center p-10 text-center">
      <Tagline>Pricing</Tagline>
      <h2 className="font-extrabold text-3xl mb-8 pt-3">
        Flexible Pricing to Fit Your business
      </h2>
      <div className="grid mt-10 items-center grid-cols-3 gap-3 md:grid-cols-3 max-w-screen-xl">
        {pricingPlans.map((plan, i) => (
          <PlanCard key={i} {...plan} />
        ))}
      </div>
    </div>
  )
}

export default PricingSection
