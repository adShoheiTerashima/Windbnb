import React, { useState } from 'react'
import { Transition } from '@headlessui/react'

import { useNavMenu, NavMenuContext } from '@lib/hooks/useNavMenu'
import { FORM_TYPE } from '@lib/utils/const'
import { focusFormType } from '@lib/utils/types'

import Header from '@components/common/Header'
import Footer from '@components/common/Footer'
import SearchMenu from '@components/searchMenu'
import Overlay from '@components/common/Overlay'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  const navMenuCtx = useNavMenu()
  const [focusForm, setForcusForm] = useState<focusFormType>(FORM_TYPE.LOCATION)

  return (
    <div className="min-h-screen text-black relative">
      <NavMenuContext.Provider value={navMenuCtx}>
        <Header setForcusForm={setForcusForm} />
        <Transition
          show={navMenuCtx.isOpen}
          enter="transition-opacity duration-150"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Overlay setForcusForm={setForcusForm} />
          <SearchMenu focusForm={focusForm} setForcusForm={setForcusForm} />
        </Transition>
      </NavMenuContext.Provider>
      <main className="px-24 font-Montserrat">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
