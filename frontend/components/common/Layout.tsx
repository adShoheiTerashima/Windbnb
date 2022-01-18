import React, { useState } from 'react'
import { Transition } from '@tailwindui/react'

import Header from '@components/common/Header'
import Footer from '@components/common/Footer'
import NavMenu from '@components/common/NavMenu'
import Overlay from '@components/common/Overlay'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  const [isOpenNavBar, setIsOpenNavBar] = useState(false)
  const clickNavBar = () => {
    console.log(isOpenNavBar)
    setIsOpenNavBar(!isOpenNavBar)
  }
  return (
    <div className="min-h-screen text-black">
      <Header click={clickNavBar} />
      <Transition
        show={isOpenNavBar}
        enter="transition-opacity duration-150"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        {isOpenNavBar ? (
          <>
            <Overlay click={clickNavBar} />
            <NavMenu />
          </>
        ) : (
          ''
        )}
      </Transition>
      <main className="px-24 font-Montserrat">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
