import { useContext } from 'react'

import { NavMenuContext } from '@lib/hooks/useNavMenu'

import Logo from '@components/icons/Logo'
import SeachButton from '@components/common/SearchButton'

const Header = () => {
  const ctx = useContext(NavMenuContext)
  const click = () => {
    ctx.setIsOpen(!ctx.isOpen)
  }
  return (
    <header className="flex justify-between items-center py-8 px-24">
      <div className="cursor-pointer">
        <Logo />
      </div>
      <SeachButton click={click} />
    </header>
  )
}
export default Header
