import { useContext, useEffect, useRef, useState } from 'react'

import { FocusSearchFormContext, formType } from '@lib/hooks/useSearch'
import { SearchConditionContext } from '@lib/hooks/useSearchCondition'

import SearchButton from '@components/searchMenu/Button'
import SearchInput from '@components/searchMenu/Input'
import SuggestList from '@components/searchMenu/SuggestList'
import GuestCount from '@components/searchMenu/GuestCount'

const SearchForm = () => {
  const locationRef = useRef<HTMLDivElement>(null)
  const guestsRef = useRef<HTMLDivElement>(null)
  const focusSearchFormCtx = useContext(FocusSearchFormContext)
  const searchConditionCtx = useContext(SearchConditionContext)
  const [guests, setGuests] = useState(0)

  // 検索テキストフォーム周り
  const [inputText, setInputText] = useState(
    `${searchConditionCtx.city}, ${searchConditionCtx.country}`,
  )
  const changeText = (event: { target: HTMLInputElement }) => setInputText(event.target.value)

  // guestの人数変更
  const [countAdults, setCountAdults] = useState(searchConditionCtx.adults)
  const [countChildren, setCountChildren] = useState(searchConditionCtx.children)
  const inputAdults = (num: number) => setCountAdults(num)
  const inputChildren = (num: number) => setCountChildren(num)
  useEffect(() => setGuests(countAdults + countChildren), [countAdults, countChildren])

  // これは値オブジェクトとして切り出したい…
  const isZeroGuest = guests === 0
  const isFocusLocation = focusSearchFormCtx.focusFormType === formType.LOCATION
  const isFocusGuests = focusSearchFormCtx.focusFormType === formType.GUESTS

  // ヘッダーの検索ボタンのどこを押したかによって、初期表示のfocusを変える
  useEffect(() => {
    if (isFocusLocation && locationRef.current) {
      locationRef.current.focus()
    }
    if (isFocusGuests && guestsRef.current) {
      guestsRef.current.focus()
    }
  }, [])

  const clickLocation = () => focusSearchFormCtx.setFocusType(formType.LOCATION)
  const clickGuests = () => focusSearchFormCtx.setFocusType(formType.GUESTS)
  const clickSuggest = (propertyId: number) => {
    // ここで何らかの形でpropertyIdからcity, countryを取り出す
    console.log(`propertyId${propertyId}`)

    // とりあえず適当に値入れておく
    setInputText('Helsinki, Finland')
  }

  return (
    <div className="w-full h-115 absolute top-0 p-24 pb-0 bg-white">
      <div className="grid grid-cols-3 font-Mulish border border-gray-2 shadow-search rounded-2xl">
        <div className="flex">
          <div
            className="p-2.5 w-full h-full border border-white rounded-2xl cursor-pointer hover:border-black focus-within:border-black focus:outline-none"
            ref={locationRef}
            onClick={clickLocation}
            tabIndex={0}
          >
            <SearchInput
              id="search-location"
              label="LOCATION"
              placeholder="Add location"
              inputText={inputText}
              change={changeText}
            />
          </div>
          <div className="border-l border-gray-2" />
        </div>
        <div className="flex">
          <div
            className="p-2.5 w-full h-full  border border-white rounded-2xl cursor-pointer  hover:border-black focus:border-black focus:outline-none"
            ref={guestsRef}
            onClick={clickGuests}
            tabIndex={0}
          >
            <p className="mb-1 text-0.5 font-extrabold">GUESTS</p>
            {isZeroGuest ? (
              <p className="text-sm text-gray-4">Add guests</p>
            ) : (
              <p className="text-sm">{countAdults + countChildren} guests</p>
            )}
          </div>
          <div className="border-l border-gray-2" />
        </div>
        <div className="flex justify-center items-center">
          <SearchButton />
        </div>
      </div>
      <div className="grid grid-cols-3 mt-11">
        <div className="ml-1.5">{isFocusLocation ? <SuggestList click={clickSuggest} /> : ''}</div>
        <div className="ml-2.5">
          {isFocusGuests ? (
            <GuestCount
              countAdults={countAdults}
              countChildren={countChildren}
              inputAdults={inputAdults}
              inputChildren={inputChildren}
            />
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  )
}

export default SearchForm
