import { useContext } from 'react'

import { NavMenuContext } from '@lib/hooks/useNavMenu'

const Overlay = () => {
  const ctx = useContext(NavMenuContext)
  const click = () => {
    ctx.setIsOpen(!ctx.isOpen)
  }
  return (
    <div
      className="w-full h-full absolute top-0 bg-gray-3 opacity-40 cursor-pointer"
      onClick={click}
    />
  )
}
export default Overlay
