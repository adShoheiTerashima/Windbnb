import React from 'react'

import Header from '@components/common/Header'
import Footer from '@components/common/Footer'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => (
  <div className="min-h-screen text-black">
    <Header />
    <main className="px-24 font-Montserrat">{children}</main>
    <Footer />
  </div>
)

export default Layout
