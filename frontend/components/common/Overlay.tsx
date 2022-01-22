import { useContext } from 'react'

import { NavMenuContext } from '@lib/hooks/useNavMenu'
import { FocusSearchFormContext, formType } from '@lib/hooks/useSearch'

const Overlay = () => {
  const navMenuCtx = useContext(NavMenuContext)
  const focusSearchFormCtx = useContext(FocusSearchFormContext)

  const click = () => {
    navMenuCtx.setIsOpen(!navMenuCtx.isOpen)
    focusSearchFormCtx.setFocusType(formType.NONE)
  }

  return (
    <div
      className="w-full h-full absolute top-0 bg-gray-3 opacity-40 cursor-pointer"
      onClick={click}
    />
  )
}
export default Overlay
