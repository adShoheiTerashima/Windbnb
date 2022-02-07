import { useContext, useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { InstantSearch, Configure } from 'react-instantsearch-dom'

import { SearchConditionContext } from '@lib/hooks/useSearchCondition'
import { NavMenuContext } from '@lib/hooks/useNavMenu'
import { suggestClient, suggestIndexName } from '@lib/api/algolia'
import { FORM_TYPE } from '@lib/utils/const'
import { focusFormType } from '@lib/utils/types'

import SubmitButton from '@components/searchMenu/SubmitButton'
import SearchBox from '@components/searchMenu/SearchBox'
import SuggestList from '@components/searchMenu/SuggestList'
import GuestCount from '@components/searchMenu/GuestCount'
import { LocationValueObject } from '@domain/location'
import { GuestsValueObject } from '@domain/guets'
import Close from '@components/icons/Close'

type Props = {
  focusForm: focusFormType
  setForcusForm: React.Dispatch<React.SetStateAction<focusFormType>>
}

const SearchForm = ({ focusForm, setForcusForm }: Props) => {
  const locationRef = useRef<HTMLDivElement>(null)
  const guestsRef = useRef<HTMLDivElement>(null)
  const searchConditionCtx = useContext(SearchConditionContext)
  const navMenuCtx = useContext(NavMenuContext)
  const router = useRouter()
  const locVO = new LocationValueObject(searchConditionCtx.city, searchConditionCtx.country)
  const guestsVO = new GuestsValueObject(searchConditionCtx.adults, searchConditionCtx.children)

  // 選択中の検索テキストフォーム周り
  const [inputCity, setInputCity] = useState(locVO.city)
  const [inputCountry, setInputCountry] = useState(locVO.country)
  const [inputText, setInputText] = useState(locVO.location)
  const changeText = (event: { target: HTMLInputElement }) => setInputText(event.target.value)

  // 選択中のguestの人数変更
  const [countAdults, setCountAdults] = useState(guestsVO.adults)
  const [countChildren, setCountChildren] = useState(guestsVO.children)
  const [countGuests, setCountGuests] = useState(guestsVO.guests)
  const inputAdults = (num: number) => {
    guestsVO.adults = num
    setCountAdults(guestsVO.adults)
    setCountGuests(guestsVO.guests)
  }
  const inputChildren = (num: number) => {
    guestsVO.children = num
    setCountChildren(guestsVO.children)
    setCountGuests(guestsVO.guests)
  }

  const isFocusLocation = focusForm === FORM_TYPE.LOCATION
  const isFocusGuests = focusForm === FORM_TYPE.GUESTS

  // ヘッダーの検索ボタンのどこを押したかによって、初期表示のfocusを変える
  useEffect(() => {
    if (isFocusLocation && locationRef.current) {
      locationRef.current.focus()
    }
    if (isFocusGuests && guestsRef.current) {
      guestsRef.current.focus()
    }
  }, [])

  // clickイベント
  const clickClose = () => navMenuCtx.setIsOpen(false)
  const clickLocation = () => setForcusForm(FORM_TYPE.LOCATION)
  const clickGuests = () => setForcusForm(FORM_TYPE.GUESTS)
  const clickSuggest = (city: string, country: string) => {
    locVO.value = { city, country }
    setInputText(locVO.location)
    setInputCity(locVO.city)
    setInputCountry(locVO.country)
  }

  // Searchボタン押下
  const clickSubmitButton = () => {
    searchConditionCtx.setCity(inputCity)
    searchConditionCtx.setCountry(inputCountry)
    searchConditionCtx.setAdults(countAdults)
    searchConditionCtx.setChildren(countChildren)
    navMenuCtx.setIsOpen(false)
    router.push({
      pathname: '/',
      query: {
        city: inputCity,
        country: inputCountry,
        adults: countAdults,
        children: countChildren,
      },
    })
  }

  return (
    <div className="absolute top-0 h-157 w-full bg-white px-3 py-0 md:h-115 lg:p-24 lg:pb-0">
      <div className="flex items-center justify-between py-4 lg:hidden">
        <p className="font-Mulish text-sm font-bold">Edit your Search</p>
        <div onClick={clickClose}>
          <Close width="22px" height="22px" className="fill-black" />
        </div>
      </div>
      <InstantSearch indexName={suggestIndexName} searchClient={suggestClient}>
        <Configure hitsPerPage={4} />
        <div className="grid grid-cols-1 rounded-2xl border border-gray-F2F2F2 font-Mulish shadow-search md:grid-cols-3">
          <div className="flex">
            <div
              className="focus:outline-none h-full w-full cursor-pointer rounded-2xl border border-white p-2.5 focus-within:border-black hover:border-black"
              ref={locationRef}
              onClick={clickLocation}
              tabIndex={0}
            >
              <SearchBox
                id="search-location"
                label="LOCATION"
                placeholder="Add location"
                inputText={inputText}
                change={changeText}
              />
            </div>
            <div className="hidden border-l border-gray-F2F2F2 md:block" />
          </div>
          <div className="flex">
            <div
              className="focus:outline-none h-full w-full cursor-pointer rounded-2xl border border-white px-8.5 py-2.5 hover:border-black focus:border-black md:p-2.5"
              ref={guestsRef}
              onClick={clickGuests}
              tabIndex={0}
            >
              <p className="mb-1 text-0.5 font-extrabold">GUESTS</p>
              {guestsVO.isZeroGuest ? (
                <p className="text-sm text-gray-BDBDBD">Add guests</p>
              ) : (
                <p className="text-sm">{countGuests} guests</p>
              )}
            </div>
            <div className="hidden border-l border-gray-F2F2F2 md:block" />
          </div>
          <div className="hidden items-center justify-center md:flex">
            <SubmitButton click={clickSubmitButton} />
          </div>
        </div>
        <div className="mt-11 grid grid-cols-1 md:grid-cols-3">
          <div className="ml-1.5">{isFocusLocation && <SuggestList click={clickSuggest} />}</div>
          <div className="ml-2.5">
            {isFocusGuests && (
              <GuestCount
                countAdults={countAdults}
                countChildren={countChildren}
                inputAdults={inputAdults}
                inputChildren={inputChildren}
              />
            )}
          </div>
        </div>
      </InstantSearch>
      <div className="absolute inset-x-2/4 bottom-8 flex justify-center md:block">
        <SubmitButton click={clickSubmitButton} />
      </div>
    </div>
  )
}

export default SearchForm
