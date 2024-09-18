import { Check } from 'lucide-react'

const PlanCard = ({ price, title, description, features, isPopular }) => {
  return (
    <div className="plan-card bordeer flex flex-col justify-between bg-white/20 backdrop-blur-lg rounded-lg h-full p-6 hover:shadow-md text-left relative">
      {isPopular && (
        <div className="popular-tag absolute -top-6 left-0 bg-indigo-500 text-white px-2 py-1 rounded-t-lg w-full text-center">
          popular
        </div>
      )}

      <div className="">
        <div className="inline-flex items-end">
          <h1 className="font-extrabold text-3xl">${price}</h1>
          <span className=" text-gray-500 align-bottom">/month</span>
        </div>
        <h2 className="font-bold text-xl my-2">{title}</h2>
        <p
          className="
        "
        >
          {description}
        </p>
        <div className="border-t border-gray-400 opacity-25 my-3 flex-grow" />
        <ul className="">
          {features.map((feature, index) => (
            <li
              className=" flex items-center text-gray-700 gap-2 my-2"
              key={index}
            >
              <div className="w-4 h-4 bg-indigo-500 rounded-full flex items-center justify-center">
                <Check size={32} className="inline-block text-white w-3 h-3" />
              </div>
              <p className="">{feature}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="">
        <button className="bg-indigo-500 hover:bg-indigo-600 py-2 mt-3 rounded-lg text-white w-full">
          Select Plan
        </button>
      </div>
    </div>
  )
}

export default PlanCard
