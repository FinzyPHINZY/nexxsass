const logos = Array(9)
  .fill(null)
  .map((item, i) => ({
    id: i + 1,
    name: `Partner ${i + 1}`,
    logo: `/logos/${i + 1}.png`,
  }))

export const partnersLogo = logos
