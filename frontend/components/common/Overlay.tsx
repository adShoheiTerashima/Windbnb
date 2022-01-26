import { useContext } from 'react'

import { NavMenuContext } from '@lib/hooks/useNavMenu'
import { FORM_TYPE } from '@lib/utils/const'
import { focusFormType } from '@lib/utils/types'

type Props = {
  setForcusForm: React.Dispatch<React.SetStateAction<focusFormType>>
}
const Overlay = ({ setForcusForm }: Props) => {
  const navMenuCtx = useContext(NavMenuContext)
  setForcusForm

  const click = () => {
    navMenuCtx.setIsOpen(!navMenuCtx.isOpen)
    setForcusForm(FORM_TYPE.NONE)
  }

  return (
    <div
      className="absolute top-0 h-full w-full cursor-pointer bg-gray-3 opacity-40"
      onClick={click}
    />
  )
}
export default Overlay
