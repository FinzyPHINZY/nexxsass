import React from 'react'

const Footer = () => {
  return (
    <footer className="text-center p-8 text-gray-600 text-lg border-t bg-white/20 backdrop-blur-xl mt-10">
      <p>
        &copy; {new Date().getFullYear()}{' '}
        <a href="https://finzyphinzy.vercel.app">
          finzyphinzy. All Rights Reserved.
        </a>
      </p>
    </footer>
  )
}

export default Footer
