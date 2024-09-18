import { useScroll } from 'framer-motion'
import logo from '../assets/logo.png'
import { useMotionValueEvent } from 'framer-motion'
import { useState } from 'react'
import MobileMenu from './MobileMenu'

const Navbar = () => {
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest > 0 && !scrolled) {
      setScrolled(true)
    } else if (latest === 0 && scrolled) {
      setScrolled(false)
    }
  })

  const defaultClasses = 'transition-all absolute inset-0 -z-1'

  let navBarClasses = scrolled
    ? `${defaultClasses} border-b border-black/10 bg-white/75 backdrop-blur-lg`
    : `${defaultClasses} bg-transparent`

  return (
    <div className="sticky inset-x-0 top-0 w-full z-30">
      <div className={navBarClasses} />
      <div className="mx-auto w-full max-w-screen-xl px-2.5 lg:px-20 relative">
        <div className="flex items-center justify-between">
          <div className="">
            <img src={logo} alt="logo" className="h-20 w-20" />
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-4 p-4">
              <li className="">
                <a href="#" className="text-gray-600">
                  About us
                </a>
              </li>
              <li className="">
                <a href="#features" className="text-gray-600">
                  Features
                </a>
              </li>
              <li className="">
                <a href="#pricing" className="text-gray-600">
                  Pricing
                </a>
              </li>
            </ul>
          </nav>
          <div className="hidden md:block *:bg-black *:py-2 *:px-4 *:rounded-md *:text-white *:cursor-pointer">
            <a href="#" className="">
              Login
            </a>
            <a href="#" className="ml-2">
              Sign Up
            </a>
          </div>
          <MobileMenu />
        </div>
      </div>
    </div>
  )
}

export default Navbar
