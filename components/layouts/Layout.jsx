import React from 'react'
import Navbar from './navbar'
import Footer from './footer'


const Layout = ({children}) => {
  return (
    <div className="">
      <div className="">
        {/* Navbar */}
        <Navbar />

        {/* Main content */}
        <main className="">
          <div className="">{children}</div>
        </main>

        {/* Footer */}
      </div>
      <Footer />
    </div>
  )
}

export default Layout