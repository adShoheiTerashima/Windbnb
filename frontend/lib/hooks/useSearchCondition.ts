import { createContext, useCallback, useState } from 'react'

type searchConditionContextType = {
  city: string
  country: string
  adults: number
  children: number
  setCity: (city: string) => void
  setCountry: (country: string) => void
  setAdults: (adults: number) => void
  setChildren: (children: number) => void
}
const defaultSearchConditionContext: searchConditionContextType = {
  city: '',
  country: '',
  adults: 0,
  children: 0,
  setCity: () => {},
  setCountry: () => {},
  setAdults: () => {},
  setChildren: () => {},
}

export const SearchConditionContext = createContext<searchConditionContextType>(
  defaultSearchConditionContext,
)
export const useSearchCondition = (): searchConditionContextType => {
  const [city, setCityState] = useState('Helsinki')
  const [country, setcountryState] = useState('Finland')
  const [adults, setAdultsState] = useState(1)
  const [children, setChildrenState] = useState(0)
  return {
    city,
    country,
    adults,
    children,
    setCity: useCallback((current: string): void => {
      setCityState(current)
    }, []),
    setCountry: useCallback((current: string): void => {
      setcountryState(current)
    }, []),
    setAdults: useCallback((current: number): void => {
      setAdultsState(current)
    }, []),
    setChildren: useCallback((current: number): void => {
      setChildrenState(current)
    }, []),
  }
}
