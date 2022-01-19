import { createContext, useCallback, useState } from 'react'

type navMenuContextType = {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

const defaultCotext: navMenuContextType = {
  isOpen: false,
  setIsOpen: () => {},
}

export const NavMenuContext = createContext<navMenuContextType>(defaultCotext)
export const useNavMenu = (): navMenuContextType => {
  const [openFlg, setOpenFlg] = useState(false)
  return {
    isOpen: openFlg,
    setIsOpen: useCallback((current: boolean): void => {
      setOpenFlg(current)
    }, []),
  }
}
