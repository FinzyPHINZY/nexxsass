export const pricingPlans = [
  {
    title: 'Free Plan',
    price: 0,
    description: 'For individuals and hobbyists',
    features: [
      'Up to 3 forms per month',
      'Basic AI form builder',
      'Basic form customization',
      'Data export in CSV format',
    ],
    isPopular: false,
  },
  {
    title: 'Hobby Plan',
    price: 15,
    description: 'Perfect for growing businesses needing advanced features.',
    features: [
      'Up to 100 forms per month',
      'Data export in CSV and Excel',
      'Advanced conditional logic and branching',
      'Basic analysitcs and reporting',
    ],
    isPopular: true,
  },

  {
    title: 'Pro Plan',
    price: 89,
    description: 'For large businesses and enterprises with custom needs.',
    features: [
      'Unlimited forms per month',
      'Premium AI form suggestions',
      'Advanced conditional logic and branching',
      'API access for custom integrations',
    ],
    isPopular: false,
  },
]
