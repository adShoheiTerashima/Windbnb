import React from 'react'
import { Transition } from '@headlessui/react'

import { useNavMenu, NavMenuContext } from '@lib/hooks/useNavMenu'
import { useFocusSearchForm, FocusSearchFormContext } from '@lib/hooks/useSearch'

import Header from '@components/common/Header'
import Footer from '@components/common/Footer'
import SearchMenu from '@components/searchMenu'
import Overlay from '@components/common/Overlay'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  const navMenuCtx = useNavMenu()
  const focusSearchFormCtx = useFocusSearchForm()
  return (
    <div className="min-h-screen text-black relative">
      <NavMenuContext.Provider value={navMenuCtx}>
        <FocusSearchFormContext.Provider value={focusSearchFormCtx}>
          <Header />
          <Transition
            show={navMenuCtx.isOpen}
            enter="transition-opacity duration-150"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Overlay />
            <SearchMenu />
          </Transition>
        </FocusSearchFormContext.Provider>
      </NavMenuContext.Provider>
      <main className="px-24 font-Montserrat">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
