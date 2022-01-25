import { createContext, useCallback, useState } from 'react'

/* types */
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
export type defaultSearchConditionType = Pick<
  searchConditionContextType,
  'city' | 'country' | 'adults' | 'children'
>

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
export const useSearchCondition = (
  defaultValue: defaultSearchConditionType,
): searchConditionContextType => {
  const [city, setCityState] = useState(defaultValue.city)
  const [country, setcountryState] = useState(defaultValue.country)
  const [adults, setAdultsState] = useState(defaultValue.adults)
  const [children, setChildrenState] = useState(defaultValue.children)
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
