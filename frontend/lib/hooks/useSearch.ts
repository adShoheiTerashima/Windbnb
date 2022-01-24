import { createContext, useCallback, useState } from 'react'

/* 検索表示時、LOCATIONとGUESTSのどちらが選択状態になっているか */
export const formType = { LOCATION: 'LOCATION', GUESTS: 'GUESTS', NONE: 'NONE' }

export type focusFormType = typeof formType[keyof typeof formType]
type focusFormContextType = {
  focusFormType: focusFormType
  setFocusType: (focusType: focusFormType) => void
}

const defaultfocusFormCotext: focusFormContextType = {
  focusFormType: formType.NONE,
  setFocusType: () => {},
}

export const FocusSearchFormContext = createContext<focusFormContextType>(defaultfocusFormCotext)
export const useFocusSearchForm = (): focusFormContextType => {
  const [focusFormType, setFocusFormType] = useState<focusFormType>(formType.NONE)
  return {
    focusFormType,
    setFocusType: useCallback((current: focusFormType): void => {
      setFocusFormType(current)
    }, []),
  }
}
