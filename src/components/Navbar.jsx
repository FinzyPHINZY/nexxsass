import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <div className="sticky inset-x-0 top-0 w-full z-30">
      <div className="mx-auto w-full max-w-screen-xl px-2.5 lg:px-20 relative">
        <div className="flex items-center justify-between">
          <div className="">
            <img src={logo} alt="logo" className="h-20 w-20" />
          </div>
          <nav className="">
            <ul className="flex space-x-4 p-4">
              <li className="">
                <a href="#" className="text-gray-600">
                  About us
                </a>
              </li>
              <li className="">
                <a href="#" className="text-gray-600">
                  Features
                </a>
              </li>
              <li className="">
                <a href="#" className="text-gray-600">
                  Pricing
                </a>
              </li>
            </ul>
          </nav>
          <div className="*:bg-black *:py-2 *:px-4 *:rounded-md *:text-white *:cursor-pointer">
            <a href="#" className="">
              Login
            </a>
            <a href="#" className="ml-2">
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
