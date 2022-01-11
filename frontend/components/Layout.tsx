import React from 'react'

import Header from './Header'
import Footer from './Footer'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => (
  <div className="min-h-screen">
    <Header />
    <main className="px-26 font-Montserra ">{children}</main>
    <Footer />
  </div>
)

export default Layout
