import React from 'react'

import Header from './Header'
import Footer from './Footer'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => (
  <div className="min-h-screen px-26">
    <Header />
    <main className="font-Montserrat">{children}</main>
    <Footer />
  </div>
)

export default Layout
