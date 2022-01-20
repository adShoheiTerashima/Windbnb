import { createContext, useCallback, useState } from 'react'

/* 検索表示時、LOCATIONとGUESTSのどちらが選択状態になっているか */
export const formType = { LOCATION: 'LOCATION', GUESTS: 'GUESTS', NONE: 'NONE' } as const

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

/* 現在表示されている検索結果の条件 */
/*
type searchConditionContextType = {
  location: string
  adults: number
  children: number
  setLocation: (location: string) => void
  setAdults: (adults: number) => void
  setChildren: (children: number) => void
}
const defaultSearchConditionContext: searchConditionContextType = {
  location: '',
  adults: 0,
  children: 0,
  setLocation: () => {},
  setAdults: () => {},
  setChildren: () => {},
}

export const SearchConditionContext = createContext<searchConditionContextType>(
  defaultSearchConditionContext,
)
export const useSearchCondition = (): searchConditionContextType => {
  const [location, setLocationState] = useState('')
  const [adults, setAdultsState] = useState(0)
  const [children, setChildrenState] = useState(0)
  return {
    location,
    adults,
    children,
    setLocation: useCallback((current: string): void => {
      setLocationState(current)
    }, []),
    setAdults: useCallback((current: number): void => {
      setAdultsState(current)
    }, []),
    setChildren: useCallback((current: number): void => {
      setChildrenState(current)
    }, []),
  }
}
*/
